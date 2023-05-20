import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState } from "draft-js";
import {
  MdDriveFileMoveOutline,
  MdOutlineAdd,
} from "react-icons/md";
import { BsCloudCheck, BsCameraVideo, BsKeyboardFill } from "react-icons/bs";
import { RxCounterClockwiseClock } from "react-icons/rx";
import { MdOutlineComment, MdLockOutline, MdLocationOn } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import { SiGooglecalendar, SiGooglekeep } from "react-icons/si";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { RiUserFill, RiStarSLine, RiArrowDropRightLine } from "react-icons/ri";
import { TfiMenuAlt } from "react-icons/tfi";
import mine from "../mine.jpeg";
import rule from "../rule.png";
import rulec from "../rule-copy.png";

const TextEditor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [isStarred, setIsStarred] = useState(false);

  const handleStarClick = () => {
    setIsStarred(!isStarred);
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const handleTitleChange = (event) => {
    document.title = event.target.textContent;
  };
  return (
    <div className="bg-[#fdfdfd] min-h-screen pb-16">
      <nav className="flex  justify-between items-center p-3 -mt-1 pb-1">
        <div className="flex">
          <div className="mt-2 cursor-pointer" title="Docs home">
            <img
              alt="none"
              width="23px"
              height="23px"
              src="https://upload.wikimedia.org/wikipedia/commons/0/01/Google_Docs_logo_%282014-2020%29.svg"
              // src="https://e7.pngegg.com/pngimages/67/491/png-clipart-google-docs-computer-icons-document-android-google-template-blue.png"
            />
          </div>

          <div className="flex-grow ml-2 ">
            <div className="flex items-center ">
              <h1 className="mr-3" onInput={handleTitleChange} contentEditable="true">
                Untitled document
              </h1>

              <div
                className={`hover:bg-zinc-200 cursor-pointer hover:rounded-2xl p-[3px] ${
                  isStarred ? "text-yellow-500" : ""
                }`}
                title="star"
                onClick={handleStarClick}
              >
                <RiStarSLine />
              </div>

              <div
                className="hover:bg-zinc-200 cursor-pointer hover:rounded-2xl p-[3px]"
                title="move"
              >
                <MdDriveFileMoveOutline />
              </div>
              <div
                className="hover:bg-zinc-200 cursor-pointer hover:rounded-2xl p-[3px]"
                title="see document status"
              >
                <BsCloudCheck strokeWidth={0.3} />
              </div>
              {/* <MdOutlineStarRate />
              <MdDriveFileMoveOutline />
              <BsCloudCheck strokeWidth={0.5} /> */}
            </div>
            <div className="flex items-center overflow-x-scroll text-sm space-x-2  text-gray-600">
              <p className="text-xs cursor-pointer hover:bg-zinc-200 hover:rounded-md py-[2px] px-[3px]">
                File
              </p>
              <p className="text-xs cursor-pointer hover:bg-zinc-200 hover:rounded-md py-[2px] px-[3px]">
                Edit
              </p>
              <p className="text-xs hover:bg-zinc-200 cursor-pointer hover:rounded-md py-[2px] px-[3px]">
                View
              </p>
              <p className="text-xs hover:bg-zinc-200 hover:rounded-md cursor-pointer py-[2px] px-[3px]">
                Insert
              </p>
              <p className="text-xs hover:bg-zinc-200 hover:rounded-md py-[2px] cursor-pointer px-[3px]">
                Format
              </p>
              <p className="text-xs hover:bg-zinc-200 hover:rounded-md py-[2px] px-[3px] cursor-pointer">
                Tools
              </p>
              <p className="text-xs hover:bg-zinc-200 hover:rounded-md py-[2px] px-[3px] cursor-pointer">
                Extensions
              </p>
              <p className="text-xs hover:bg-zinc-200 hover:rounded-md py-[2px] px-[3px] cursor-pointer">
                Help
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center mt-2">
          <div className="flex space-x-2 -mt-3">
            <div
              className="hover:bg-zinc-200 hover:rounded-2xl cursor-pointer p-2"
              title="Last edit was 5 hours ago"
            >
              <RxCounterClockwiseClock size={20} strokeWidth={0.3} />
            </div>
            <div
              className="hover:bg-zinc-200 hover:rounded-2xl cursor-pointer p-2"
              title="Open comment history (Option+Shift+A)"
            >
              <MdOutlineComment size={20} strokeWidth={0.3} stroke="none" />
            </div>
            {/* <div
              className="flex hover:bg-zinc-200 hover:rounded-2xl cursor-pointer p-2"
              title="Join a call or present this tab to the call "
            >
              <BsCameraVideo size={20} strokeWidth={2} stroke="none" />
              <IoMdArrowDropdown size={20} strokeWidth={2} stroke="none" />
            </div> */}
            <div className="relative inline-block">
              <div
                className="flex items-center p-2 cursor-pointer hover:bg-zinc-200 hover:rounded-2xl"
                title="Join a call or present this tab to the call"
                onClick={handleToggle}
              >
                <BsCameraVideo size={20} strokeWidth={2} stroke="none" />
                <IoMdArrowDropdown size={20} strokeWidth={2} stroke="none" />
              </div>
              {isOpen && (
                <div className="fixed z-10 bg-white border border-gray-300 rounded-md mt-2">
                  <ul>
                    <li className="flex items-center p-2 hover:bg-gray-100">
                      <span className="ml-2 whitespace-nowrap">
                        Join or start a meeting
                      </span>
                    </li>
                    <li className="flex items-center p-2 hover:bg-gray-100">
                      <MdOutlineAdd size={18} />
                      <span className="ml-2 whitespace-nowrap">
                        Start a new meeting
                      </span>
                    </li>
                    <li className="flex items-center p-2 hover:bg-gray-100">
                      <BsKeyboardFill size={18} />
                      <span className="ml-2 whitespace-nowrap">
                        Use a meeting code
                      </span>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          <div
            title="Private to only me "
            className="flex space-x-2 -mt-3 ml-5 px-4 py-2 bg-blue-200 rounded-3xl   cursor-pointer hover:shadow-lg"
          >
            <MdLockOutline size={15} strokeWidth={0.3} stroke="none" />
            <p className="text-xs font-medium">Share</p>
          </div>
          <div
            title="Google Account Abhinay "
            className="ml-5 cursor-pointer  -mt-3"
          >
            <img
              src={mine}
              alt="Profile"
              className="rounded-full object-cover h-7 w-7"
              style={{ clipPath: "circle(50%)" }}
            />
          </div>
        </div>
      </nav>
      <div className="flex ">
        <div className="bg-ruler bg-repeat-y">
          <img
            alt="none"
            width="20px"
            height="20px"
            src={rule}
            // src="https://e7.pngegg.com/pngimages/67/491/png-clipart-google-docs-computer-icons-document-android-google-template-blue.png"
          />
        </div>
        <div className=" flex border-t-1 border-l-2 border-gray-300">
          <div
            className=" mt-20 hover:rounded-2xl cursor-pointer p-2"
            title="Show document outline"
          >
            <TfiMenuAlt size={20} strokeWidth={0.3} stroke="none" />
          </div>
          <div className="pl-8 pt-4">
            <div className="bg-rules bg-repeat-x">
              <img
                src={rulec}
                alt="Imag"
                width="500px"
                height="500px"
                className="mb-4"
              />
            </div>
            <Editor
              editorState={editorState}
              onEditorStateChange={setEditorState}
              toolbarClassName="flex sticky top-0 z-50 justify-center mx-auto mt-16px border-b-2 border-[#893435] shadow-md p-2 bg-green"
              editorClassName="mt-6 bg-white p-5 shadow-lg min-h-[1300px] max-w-5xl mx-auto mb-12 border-2 rounded-sm border-gray-300"
              editorStyle={{
                minHeight: "1300px",
                fontFamily: "Arial, sans-serif",
                fontSize: "16px",
                color: "#333",
              }}
            />
          </div>
        </div>
        <div className="flex ml-40  mt-2">
          <div className="flex-col fixed space-y-5">
            <button
              title="calendar"
              className="flex items-center justify-center p-2 hover:bg-zinc-100 text-green-400 hover:rounded-2xl"
            >
              <SiGooglecalendar size={18} strokeWidth={2} stroke="none" />
            </button>
            <button
              title="Keep"
              className="flex items-center justify-center p-2 hover:bg-zinc-100 text-yellow-400 hover:rounded-2xl"
            >
              <SiGooglekeep size={18} strokeWidth={2} stroke="none" />
            </button>
            <button
              title="Tasks"
              className="flex items-center justify-center p-2 hover:bg-zinc-100 text-blue-500 hover:rounded-2xl"
            >
              <IoMdCheckmarkCircleOutline
                size={18}
                strokeWidth={3}
                stroke="none"
              />
            </button>
            <button
              title="Contacts"
              className="flex items-center justify-center p-2 hover:bg-zinc-100 text-blue-500 hover:rounded-2xl"
            >
              <RiUserFill size={18} strokeWidth={2} stroke="none" />
            </button>
            <button
              title="Maps"
              className="flex items-center justify-center p-2 hover:bg-zinc-100 text-blue-500 hover:rounded-2xl"
            >
              <MdLocationOn size={18} strokeWidth={2} stroke="none" />
            </button>
            <button
              title="Get add-ons"
              className="flex items-center justify-center p-2 mt-10 hover:bg-zinc-100 hover:rounded-2xl"
            >
              <MdOutlineAdd size={18} strokeWidth={2} stroke="none" />
            </button>
          </div>
          <div className="fixed bottom-0 right-0 p-1 mb-2 mr-1 hover:bg-zinc-100 hover:rounded-2xl">
            <RiArrowDropRightLine
              size={24}
              strokeWidth={1.5}
              stroke="none"
              className=" cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextEditor;
