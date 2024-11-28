import React, { useEffect, useRef } from "react";

const VideoUploader = () => {
  const cloudinaryRef = useRef();
  const videoRefs = [useRef(), useRef()]; // Multiple refs for two videos

  useEffect(() => {
    // Ensure Cloudinary script is loaded
    if (!window.cloudinary) {
      console.error("Cloudinary script is not loaded!");
      return;
    }

    // Prevent re-initialization if it's already done
    if (cloudinaryRef.current) return;

    cloudinaryRef.current = window.cloudinary;

    // Initialize Cloudinary Video Player for both videos
    videoRefs.forEach((ref, index) => {
      if (ref.current) {
        console.log(
          `Initializing Cloudinary Video Player for video ${index + 1}...`
        );
        cloudinaryRef.current.videoPlayer(ref.current, {
          cloud_name: "dqeakzmb5",
          publicId:
            index === 0
              ? "Snapinsta.app_video_8546D61B807673A3EEB85E1D38F6F0BF_video_dashinit_icjvwo"
              : "Snapinsta.app_video_8E459C3BF5C7A6DB2B9EE30202A7A383_video_dashinit_jqytm5",
          autoplay: false,
          quality: "auto", // Automatically optimize quality based on user bandwidth
          format: "mp4", // Use mp4 format for best compatibility
          streaming: true, // Enable adaptive streaming (HLS/DASH)
          showLogo: false, // Hide Cloudinary logo
        });
      } else {
        console.error(`Video reference not found for video ${index + 1}.`);
      }
    });
  }, []);

  useEffect(() => {
    const playAndPause = (videoRef) => {
      if (videoRef.current) {
        videoRef.current.muted = true; // Mute the video
        videoRef.current.play().then(() => {
          setTimeout(() => {
            videoRef.current.pause();
            videoRef.current.muted = false; // Unmute the video after pausing
          }, 10); // Pause after 0.01 seconds
        });
      }
    };
    videoRefs.forEach(playAndPause);
  }, [videoRefs]);

  useEffect(() => {
    const handleFullscreenChange = () => {
      videoRefs.forEach((videoRef) => {
        if (videoRef.current) {
          if (document.fullscreenElement) {
            // If fullscreen is enabled
            videoRef.current.style.width = "100%";
            videoRef.current.style.height = "100%";
            videoRef.current.style.objectFit = "contain"; // Maintain aspect ratio
          } else {
            // If fullscreen is disabled
            videoRef.current.style.width = "600px"; // Reset to original width
            videoRef.current.style.height = "338px"; // Reset to original height
            videoRef.current.style.objectFit = "cover"; // Reset to original object-fit
          }
        }
      });
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, [videoRefs]);

  return (
    <div style={styles.container}>
      {/* First Video and Text Box */}
      <div style={styles.section}>
        <div style={styles.videoWrapper}>
          <video
            ref={videoRefs[0]}
            data-cld-public-id="Snapinsta.app_video_8546D61B807673A3EEB85E1D38F6F0BF_video_dashinit_icjvwo"
            controls
            style={styles.video}
          />
        </div>
        <div style={styles.textBoxWrapper}>
          <h2 style={styles.heading}>HOW IT ALL STARTED</h2>
          <textarea
            style={styles.textBox}
            placeholder="Write your story here..."
          />
        </div>
      </div>

      {/* Second Video and Text Box */}
      <div style={styles.section}>
        <div style={styles.videoWrapper}>
          <video
            ref={videoRefs[1]}
            data-cld-public-id="Snapinsta.app_video_8E459C3BF5C7A6DB2B9EE30202A7A383_video_dashinit_jqytm5"
            controls
            style={styles.video}
          />
        </div>
        <div style={styles.textBoxWrapper}>
          <h2 style={styles.heading}>YOUR NEXT CHAPTER</h2>
          <textarea
            style={styles.textBox}
            placeholder="Write your story here..."
          />
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column", // Stack the video sections vertically
    alignItems: "center",
    gap: "50px", // Space between the sections
    width: "90%", // Limit the container width
    margin: "50px auto", // Center the container horizontally
  },
  section: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: "30px", // Space between video and text box
    width: "100%",
  },
  videoWrapper: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
  },
  video: {
    width: "600px", // Fixed width
    height: "338px", // Fixed height (16:9 aspect ratio)
    objectFit: "cover", // Crop to fit the dimensions if needed
    borderRadius: "10px",
    display: "block", // Ensure the video is displayed as a block element
  },
  textBoxWrapper: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  heading: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "10px",
    textAlign: "center",
  },
  textBox: {
    width: "100%",
    height: "250px",
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    resize: "none",
  },
};

export default VideoUploader;