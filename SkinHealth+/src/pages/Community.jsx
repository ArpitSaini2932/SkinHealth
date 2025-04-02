import { useEffect, useState } from "react";
import axios from "axios";

const Community = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: "", content: "" });

  useEffect(() => {
    axios.get("http://localhost:5000/posts").then((res) => setPosts(res.data));
  }, []);

  const createPost = async () => {
    await axios.post("http://localhost:5000/posts", {
      userId: "123", // Replace with logged-in user ID
      title: newPost.title,
      content: newPost.content,
    });
    alert("Post created!");
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h2 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">Community Forum</h2>

      {/* Create a Post */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-6 max-w-2xl mx-auto">
        <h3 className="text-xl font-semibold mb-3">Create a Post</h3>
        <input 
          type="text" 
          placeholder="Title" 
          className="w-full border border-gray-300 rounded-lg p-3 mb-3 focus:ring-2 focus:ring-blue-500 outline-none"
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
        />
        <textarea 
          placeholder="Write your post..." 
          className="w-full border border-gray-300 rounded-lg p-3 mb-3 focus:ring-2 focus:ring-blue-500 outline-none h-32"
          onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
        />
        <button 
          onClick={createPost} 
          className="bg-blue-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-600 transition-all"
        >
          Post
        </button>
      </div>

      {/* Display Posts */}
      <div className="max-w-3xl mx-auto">
        {posts.length > 0 ? (
          posts.map((post) => (
            <div key={post._id} className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h3 className="text-xl font-bold text-gray-800">{post.title}</h3>
              <p className="text-gray-600 mt-2">{post.content}</p>
              <button 
                onClick={() => axios.put(`http://localhost:5000/posts/${post._id}/like`)} 
                className="mt-4 bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300 transition-all text-gray-700"
              >
                👍 Like ({post.likes})
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-600 text-center">No posts yet. Be the first to share something!</p>
        )}
      </div>
    </div>
  );
};

export default Community;
