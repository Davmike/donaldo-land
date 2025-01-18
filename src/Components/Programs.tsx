import { useContext } from "react";
import { MyContext } from "./Context";


function Programs() {
    const context = useContext(MyContext);
    const {
        isHidePrograms,
        setIsHideprograms
    }: any = context;

    return (
        isHidePrograms && (
            <div className="fixed inset-0 z-10 flex items-center justify-center" id="sign">
                <div className="absolute inset-0 bg-black/20 backdrop-blur-[0.1px] grayscale-[100%]" onClick={() => setIsHideprograms(!isHidePrograms)}></div>

                <div className="bg-[#1E222C] text-white rounded-lg shadow-lg w-[400px] max-w-[90%] p-6 relative z-10">
                    <button
                        className="absolute text-gray-400 top-4 right-4 hover:text-white cursor-none"
                        onClick={() => setIsHideprograms(!isHidePrograms)}
                    >
                        &times;
                    </button>
                    <h2 className="mb-2 text-[18px] font-semibold" id="login-text">LOGIN TO USE THE PROGRAMS</h2>
                    <p className="mb-4 text-gray-400 text-[11px]">
                        I really appreciate your interest in this project.
                    </p>
                    <p className="pl-3 mb-6 text-gray-400 border-l-2 border-blue-500 text-[12px]">
                        To interact with the assistant, please sign-in using your Google or GitHub credentials.
                    </p>
                    <div className="flex justify-center gap-4 mt-6">
                        <button id="github" className="bg-gray-700 text-gray-300 outline-none border-none px-4 py-2 text-[15px] rounded-[5px] transition duration-200 flex items-center cursor-none">
                            <span className="font-semibold" id="acc">GITHUB</span>
                        </button>
                        <button id="gmail" className="flex items-center px-4 py-2 outline-none border-none text-white text-[15px] transition duration-200 bg-red-600 rounded-[5px] cursor-none">
                            <span className="font-semibold" id="acc">GOOGLE</span>
                        </button>
                    </div>
                    <p className="mt-4 text-[10px] text-center text-gray-500">
                        Choose a sign-in method
                    </p>
                </div>
            </div>
        )
    );
}

export default Programs
