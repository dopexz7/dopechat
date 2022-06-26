/* global chrome */
import { useChromeStorageLocal } from "use-chrome-storage";
import { useEffect, useRef } from "react";
import { useState } from "react";
import * as Md from "react-icons/md";
import * as Io from "react-icons/io";
import InfiniteScroll from "react-infinite-scroll-component";
import { supabase } from "./contexts/supabaseClient";
function App() {
  const state = useChromeStorageLocal;
  const [set, setSet] = state("SET", []);

  const emoteTableRef = useRef(null);
  const [q, setQ] = useState("");
  const [emoteTable, setEmoteTable] = useState(false);
  const [streamerImg, setStreamImg] = useState("");
  const [posts, setPosts] = useState([]);
  const [startUpdate, setStartUpdate] = useState(false);
  const [currentEmotes, setCurrentEmotes] = useState([]);
  const [globalEmotes, setGlobalEmotes] = useState(false);
  const [extensionEnabled, setExtensionEnabled] = state(
    "dopeChatEnabled",
    false
  );
  const [globalSet, setGlobalSet] = state("GLOBALSET", []);
  const [allEmotes, setAllEmotes] = state("FULLSET", []);
  const [emoteMenu, setEmoteMenu] = useChromeStorageLocal(
    "emoteMenuCheck",
    false
  );

  const [usemotes, setUsemotes] = useState([]);
  const [globemotes, setGlobemots] = useState([]);
  useEffect(() => {
    const gettingGlobalEmotes = async () => {
      try {
        let { data: globalems, error } = await supabase
          .from("useremotes")
          .select("*")
          .eq("name", "global");
        return globalems;
      } catch (e) {
        console.log(e);
      }
    };
    const gettingUserEmotes = async () => {
      try {
        let { data: globalems, error } = await supabase
          .from("useremotes")
          .select("*");
        return globalems;
      } catch (e) {
        console.log(e);
      }
    };
    gettingUserEmotes().then((sets) => {
      setSet(sets);
      sets.forEach((v) => {
        if (v.name === window.location.pathname.split("/")[1]) {
          setUsemotes(v.emotes);
          setCurrentEmotes(v.emotes);
          setPosts(v.emotes.splice(0, 80));
        }
        if (v.name === "global") {
          setGlobalSet(v.emotes);
        }
      });
    });
    gettingGlobalEmotes().then((res) => {
      let globalEmotes = res[0].emotes;
      setGlobemots(res[0].emotes);
      let x = currentEmotes;
      let k = x.concat(globalEmotes);

      setCurrentEmotes(k);
    });
  }, []);

  useEffect(() => {
    const glob = globemotes;
    const usr = usemotes;
    const bothEmotes = usr.concat(glob);
    setAllEmotes(bothEmotes);
  }, [globemotes, usemotes]);

  if (extensionEnabled) {
    setTimeout(() => {
      const streamersProfilePic = document
        .querySelector(
          ".oajrlxb2.gs1a9yip.g5ia77u1.mtkw9kbi.tlpljxtp.qensuy8j.ppp5ayq2.goun2846.ccm00jje.s44p3ltw.mk2mc5f4.rt8b4zig.n8ej3o3l.agehan2d.sk4xxmp2.rq0escxv.nhd2j8a9.mg4g778l.pfnyh3mw.p7hjln8o.kvgmc6g5.cxmmr5t8.oygrvhab.hcukyx3x.tgvbjcpo.hpfvmrgz.jb3vyjys.rz4wbd8a.qt6c0cv9.a8nywdso.l9j0dhe7.i1ao9s8h.esuyzwwr.f1sip0of.du4w35lb.n00je7tq.arfg74bv.qs9ysxi8.k77z8yql.btwxx1t3.abiwlrkh.p8dawk7l.lzcic4wl.oo9gr5id.q9uorilb"
        )
        .getElementsByTagName("image")[0].href.baseVal;
      setStreamImg(streamersProfilePic);
    }, 1000);
    window.addEventListener("keydown", function (e) {
      if (e.altKey === true && e.keyCode === 69) {
        e.preventDefault();
        setEmoteTable(!emoteTable);
      }
    });
    let kekint = setInterval(() => {
      let emotebtn = document.getElementById("dopechat-emotebutton");
      if (emotebtn !== null) {
        emotebtn.addEventListener("click", function (e) {
          e.preventDefault();
          setEmoteTable(!emoteTable);
        });
        clearInterval(kekint);
      }
    }, 500);
  }

  function filterNShit(e) {
    setQ(e);
    beginUpdate();
  }

  const onKeyDown = (e) => {
    let tempar = [];
    if (e.key === "ArrowRight") {
      e.preventDefault();
      currentEmotes.map((val, index) => {
        if (val.code.toLowerCase().includes(q.toLowerCase())) {
          tempar.push(val);
        }
      });
      setQ(tempar.slice(0, 1)[0].code);
      insertEmote(tempar.slice(0, 1)[0].code);
      setTimeout(() => {
        setQ("");
      }, 1500);
    }
  };
  const insertEmote = (x) => {
    var textbox = document.querySelector(
      ".oo9gr5id.lzcic4wl.l9j0dhe7.gsox5hk5.notranslate"
    );

    var textbox2 = textbox.childNodes[0];
    var textbox3 = textbox2.childNodes[0];
    var textbox4 = textbox3.childNodes;
    if (textbox4[0] !== undefined) {
      textbox4[0].textContent += " " + x;
    }
  };
  function handlingTab() {
    var textbox = document.querySelector(
      ".oo9gr5id.lzcic4wl.l9j0dhe7.gsox5hk5.notranslate"
    );
    var textbox2 = textbox.childNodes[0];
    var textbox3 = textbox2.childNodes[0];
    var textbox4 = textbox3.childNodes;
    let textAr = [];
    let x = textbox4[0].textContent.split(" ");
    for (var i = 0; i < x.length; i++) {
      textAr.push(x[i]);
    }
    let len = textAr.length;
    let pepAr;
    function startsWith(str, word) {
      return str.lastIndexOf(word, 0) === 0;
    }
    if (len === 1) {
      for (var j = 0; j < currentEmotes.length; j++) {
        if (startsWith(currentEmotes[j].code, textAr.toString())) {
          textAr = currentEmotes[j].code;
          pepAr = textAr;
          textbox4[0].textContent = pepAr;
        }
      }
    } else {
      for (var k = 0; k < currentEmotes.length; k++) {
        if (startsWith(currentEmotes[k].code, textAr[textAr.length - 1])) {
          textAr.splice(len - 1, 1, currentEmotes[k].code);
          pepAr = textAr.join(" ");
          textbox4[0].textContent = pepAr;
        }
      }
    }
  }

  window.addEventListener("keydown", function (e) {
    if (e.keyCode === 9 && extensionEnabled) {
      e.preventDefault();
      handlingTab();
    }
  });
  const getMorePost = async () => {
    try {
      const kekl = posts.length + 6;

      const res = await fetch(
        `https://emxllayyisdskjtscvck.supabase.co/rest/v1/useremotes?name=eq.${
          window.location.pathname.split("/")[1]
        }&select=emotes`,
        {
          headers: {
            apikey: process.env.REACT_APP_SUPABASE_ANON_KEY,
            Authorization: process.env.REACT_APP_SUPABASE_AUTH,
          },
        }
      );
      const newPosts = await res.json();
      const lm = newPosts[0].emotes.splice(posts.length, kekl);
      setPosts((post) => [...post, ...lm]);
    } catch (e) {
      console.log(e);
    }
  };

  const beginUpdate = () => {
    if (q.length >= 1) {
      setStartUpdate(true);
    } else {
      setStartUpdate(false);
    }
  };

  const setEmoteTableOn = () => {
    setEmoteTable(false);
  };

  const onSettings = () => {
    window.open(chrome.runtime.getURL("options/options.html"));
  };

  return (
    <>
      {emoteTable && emoteMenu ? (
        <div
          id="emotetable"
          ref={emoteTableRef}
          style={{
            opacity: emoteTable ? "1" : "0",
            display: emoteTable ? "block" : "none",
          }}
        >
          <div className="emotetable-uppercontent">
            <div className="">
              <div className="emotetable-input">
                <Md.MdSearch />
                <input
                  value={q}
                  onChange={(e) => filterNShit(e.target.value)}
                  placeholder="Search emotes..."
                  onKeyDown={(e) => onKeyDown(e)}
                />
              </div>
            </div>
            <div className="emotetable-close" onClick={() => setEmoteTableOn()}>
              <Md.MdClose />
            </div>
          </div>

          <div className="emotetable-content">
            <div className="emotetable-nav">
              <div
                className="emotetable-nav-a"
                onClick={() => setGlobalEmotes(false)}
              >
                <img
                  className="emotetabable-nav-img"
                  alt=""
                  src={streamerImg}
                />
              </div>
              <div
                className="emotetable-nav-a"
                onClick={() => setGlobalEmotes(true)}
              >
                <img
                  className="emotetabable-nav-img"
                  alt=""
                  src={chrome.runtime.getURL("icon.png")}
                />
              </div>
              <div className="emotetable-nav-bottom">
                <div
                  className="emotetable-nav-settings"
                  title="Extension settings"
                  onClick={() => {
                    onSettings();
                  }}
                >
                  <Md.MdOutlineSettings />
                </div>
              </div>
            </div>
            <div className="emotetable-emotes" id="scrollableDiv">
              {globalEmotes ? (
                <div className="emotetable-global-emotes">
                  <div className="emotetable-span">Global emotes</div>
                  {globalSet &&
                    globalSet
                      .filter((val) => {
                        if (q === "") {
                          return val;
                        } else if (
                          val.code.toLowerCase().includes(q.toLowerCase())
                        ) {
                          return val;
                        }
                      })
                      .map((em, index) => {
                        return (
                          <div
                            key={index}
                            id={em.code}
                            className="emotetable-div"
                            onClick={() => insertEmote(em.code)}
                          >
                            <img
                              className="emotetableimg"
                              alt={em.code}
                              src={em.src}
                            />
                          </div>
                        );
                      })}
                </div>
              ) : (
                <div className="emotetable-streamer-emotes">
                  <div className="emotetable-span">
                    {currentEmotes.length > 1
                      ? `${window.location.pathname.split("/")[1]}'s emotes`
                      : `${
                          window.location.pathname.split("/")[1]
                        } has no emotes`}
                  </div>
                  {startUpdate && q.length >= 1 ? (
                    <div className="xgrd">
                      {currentEmotes
                        .filter((val) => {
                          if (q === "") {
                            return val;
                          } else if (
                            val.code.toLowerCase().includes(q.toLowerCase())
                          ) {
                            return val;
                          }
                        })
                        .map((data, index) => (
                          <div
                            key={index}
                            id={data.code}
                            className="emotetable-div"
                            onClick={() => insertEmote(data.code)}
                          >
                            <img
                              className="emotetableimg"
                              alt={data.code}
                              src={data.src}
                            />
                          </div>
                        ))}
                    </div>
                  ) : (
                    <div className="xgrd">
                      <InfiniteScroll
                        className="xgrd"
                        dataLength={posts.length}
                        next={getMorePost}
                        hasMore={true}
                        scrollableTarget="scrollableDiv"
                      >
                        {posts.map((data, index) => (
                          <div
                            key={index}
                            id={data.code}
                            className="emotetable-div"
                            onClick={() => insertEmote(data.code)}
                          >
                            <img
                              className="emotetableimg"
                              alt={data.code}
                              src={data.src}
                            />
                          </div>
                        ))}
                      </InfiniteScroll>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default App;
