import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import SimplePeer from "simple-peer";

const socket = io("http://localhost:5000");

const VideoCall = () => {
  const [stream, setStream] = useState(null);
  const myVideo = useRef();
  const userVideo = useRef();

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((mediaStream) => {
        setStream(mediaStream);
        if (myVideo.current) {
          myVideo.current.srcObject = mediaStream;
        }
      });

    socket.on("call", ({ signal }) => {
      const peer = new SimplePeer({ initiator: false, trickle: false, stream });
      peer.signal(signal);
      peer.on("stream", (userStream) => {
        if (userVideo.current) {
          userVideo.current.srcObject = userStream;
        }
      });
    });
  }, []);

  const startCall = () => {
    const peer = new SimplePeer({ initiator: true, trickle: false, stream });
    peer.on("signal", (signal) => socket.emit("call", { signal }));
    peer.on("stream", (userStream) => {
      if (userVideo.current) {
        userVideo.current.srcObject = userStream;
      }
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 via-white to-indigo-200">
      <h2 className="text-3xl font-bold text-indigo-600 mb-8">Video Consultation</h2>

      <div className="flex flex-wrap justify-center gap-6 mb-8">
        <div className="rounded-xl shadow-lg overflow-hidden border border-indigo-300">
          <video
            ref={myVideo}
            autoPlay
            muted
            playsInline
            className="w-[300px] h-[220px] object-cover rounded-xl"
          />
          <div className="bg-indigo-600 text-white text-center py-2">You</div>
        </div>

        <div className="rounded-xl shadow-lg overflow-hidden border border-indigo-300">
          <video
            ref={userVideo}
            autoPlay
            playsInline
            className="w-[300px] h-[220px] object-cover rounded-xl"
          />
          <div className="bg-indigo-600 text-white text-center py-2">Caller</div>
        </div>
      </div>

      <button
        onClick={startCall}
        className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-full shadow-md transition-all duration-300"
      >
        Start Call
      </button>
    </div>
  );
};

export default VideoCall;
