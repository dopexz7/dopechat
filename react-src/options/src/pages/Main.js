export default function Main() {
  return (
    <>
      <div className="flex items-center flex-col w-full">
        <div className="border-0 border-darker-purple flex flex-col w-full p-6 rounded-3xl self-stretch overflow-hidden relative transition-[300ms]">
          <div className="text-white lg:text-xl font-bold tracking-wider mb-3">Emote sets</div>

          <div className="mt-2 border-2 border-darker-purple flex flex-col w-full px-7 p-3 rounded-3xl self-stretch overflow-hidden relative transition-[300ms]">
            <div className="flex flex-row justify-center items-center">
              <div className="text-white lg:text-lg font-bold">Want to see your emotes featured?</div>
              <a
                href="https://dopechat.ddns.net/dashboard"
                className={`ml-auto border-2 px-4 py-1 rounded-2xl text-center content-center text-base font-normal cursor-pointer duration-300 hover:bg-white hover:text-darker-purple text-white`}
              >
                Upload your own emotes!
              </a>
            </div>
          </div>

          <div className="mt-2 border-0 border-darker-purple flex flex-col w-full p-0 self-stretch overflow-hidden relative transition-[300ms]">
            <div className="text-white lg:text-xl font-bold tracking-wider mb-3 mt-3">Announcements</div>
            <div className="flex flex-row">
              <div className="m-1 h-44 border-2 border-darker-purple flex flex-col w-full px-7 p-3 rounded-3xl self-stretch overflow-hidden relative transition-[300ms]">
                <div className="flex flex-col justify-center items-center">
                  <div className="mr-auto text-white lg:text-lg font-bold">Emote menu</div>
                  <div className="mr-auto w-full text-white lg:text-sm font-normal mt-3">
                    Before clicking on an emote in the emote menu, you have to type something in the input box first.
                  </div>
                </div>
              </div>
              <div className="m-1 h-44 border-2 border-darker-purple flex flex-col w-full px-7 p-3 rounded-3xl self-stretch overflow-hidden relative transition-[300ms]">
                <div className="flex flex-col justify-center items-center">
                  <div className="mr-auto text-white lg:text-lg font-bold">Emote sets</div>
                  <div className="mr-auto w-full text-white lg:text-sm font-normal mt-3">
                    Emote sets now automatically activate on the streamers' pages!
                  </div>
                </div>
              </div>
              <div className="m-1 h-44 border-2 border-darker-purple flex flex-col w-full px-7 p-3 rounded-3xl self-stretch overflow-hidden relative transition-[300ms]">
                <div className="flex flex-col justify-center items-center">
                  <div className="mr-auto text-white lg:text-lg font-bold">Other issues</div>
                  <div className="mr-auto w-full text-white lg:text-sm font-normal mt-3">
                    If you have any issues where chat looks weird, is buggy or glitchy - try resetting your settings to
                    defaults or send us a message on the website using the contact form!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
