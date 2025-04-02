import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import SimplePeer from "simple-peer";

const socket = io("http://localhost:5000");

const VideoCall = () => {
  const [stream, setStream] = useState(null);
  const myVideo = useRef();
  const userVideo = useRef();

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((mediaStream) => {
      setStream(mediaStream);
      myVideo.current.srcObject = mediaStream;
    });

    socket.on("call", ({ signal }) => {
      const peer = new SimplePeer({ initiator: false, trickle: false, stream });
      peer.signal(signal);
      peer.on("stream", (userStream) => (userVideo.current.srcObject = userStream));
    });
  }, []);

  const startCall = () => {
    const peer = new SimplePeer({ initiator: true, trickle: false, stream });
    peer.on("signal", (signal) => socket.emit("call", { signal }));
    peer.on("stream", (userStream) => (userVideo.current.srcObject = userStream));
  };

  return (
    <div>
      <h2>Video Consultation</h2>
      <video ref={myVideo} autoPlay />
      <video ref={userVideo} autoPlay />
      <button onClick={startCall}>Start Call</button>
    </div>
  );
};

export default VideoCall;
