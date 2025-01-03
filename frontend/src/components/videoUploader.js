import React, { useEffect, useRef } from "react";
import "../styles/videouploader.css";

const VideoUploader = () => {
  const cloudinaryRef = useRef();
  const videoRefs = [useRef(), useRef(), useRef(), useRef()]; // Add a ref for the third video

  useEffect(() => {
    // Ensure Cloudinary script is loaded
    if (!window.cloudinary) {
      console.error("Cloudinary script is not loaded!");
      return;
    }

    // Prevent re-initialization if it's already done
    if (cloudinaryRef.current) return;

    cloudinaryRef.current = window.cloudinary;

    // Initialize Cloudinary Video Player for all videos
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
              : index === 1
              ? "Snapinsta.app_video_8E459C3BF5C7A6DB2B9EE30202A7A383_video_dashinit_jqytm5"
              : index === 2
              ? "video_3_acylwj"
              : "https://res.cloudinary.com/dqeakzmb5/video/upload/v1735826245/video4_suyfjf.mp4",
          autoplay: false,
          quality: "auto",
          format: "mp4",
          streaming: true,
          showLogo: false,
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
        videoRef.current.addEventListener("canplay", () => {
          videoRef.current
            .play()
            .then(() => {
              setTimeout(() => {
                videoRef.current.pause();
                videoRef.current.muted = false; // Unmute the video after pausing
              }, 10); // Pause after 0.01 seconds
            })
            .catch((error) => {
              console.error("Error playing video:", error);
            });
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
            videoRef.current.style.objectFit = "contain"; // Reset to original object-fit
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
        <div style={styles.textBoxWrapper}>
          <h2 style={styles.heading}>The Journey of Cherishables</h2>
          <h1 style={styles.h3}>
            Every cherished memory begins with a story. Ours started with a
            simple idea—to capture the most tender, intimate moments in a way
            that lasts forever. Watch how our journey unfolded, and discover how
            we transform the essence of your most precious memories into
            beautiful, lasting keepsakes.
          </h1>
        </div>
        <div style={styles.videoWrapper}>
          <video
            ref={videoRefs[0]}
            data-cld-public-id="Snapinsta.app_video_8546D61B807673A3EEB85E1D38F6F0BF_video_dashinit_icjvwo"
            controls
            style={styles.video}
          />
        </div>
      </div>

      {/* Second Video and Text Box */}
      <div style={styles.section}>
        <div style={styles.textBoxWrapper}>
          <h2 style={styles.heading}>
            A Mother's Love, Immortalized: The Story Behind the Keepsake
          </h2>
          <h1 style={styles.h3}>
            Watch as we bring to life the cherished memory of a 6-month-old's
            tiny hand, preserved in 2D, 3D and embossed.. This keepsake isn't
            just a decoration; it's a testament to the moments that shape our
            lives, captured by Cherishables to be treasured forever.
          </h1>
        </div>
        <div style={styles.videoWrapper}>
          <video
            ref={videoRefs[1]}
            data-cld-public-id="Snapinsta.app_video_8E459C3BF5C7A6DB2B9EE30202A7A383_video_dashinit_jqytm5"
            controls
            style={styles.video}
          />
        </div>
      </div>

      {/* Third Video and Text Box */}
      <div style={styles.section}>
        <div style={styles.textBoxWrapper}>
          <h2 style={styles.heading}>Moments of Magic</h2>
          <h1 style={styles.h3}>
            A captivating journey through the magic of creating timeless
            memories. Dive into the artistry and emotion behind every keepsake
            we bring to life.
          </h1>
        </div>
        <div style={styles.videoWrapper}>
          <video
            ref={videoRefs[2]}
            data-cld-public-id="video_3_acylwj"
            controls
            style={styles.video}
          />
        </div>
      </div>

      {/* Fourth Video and Text Box */}
      <div style={styles.section}>
        <div style={styles.textBoxWrapper}>
          <h2 style={styles.heading}>A New Chapter</h2>
          <h1 style={styles.h3}>
            Experience the next step in our journey as we unveil new ways to
            cherish and preserve your most treasured moments.
          </h1>
        </div>
        <div style={styles.videoWrapper}>
          <video
            ref={videoRefs[3]}
            data-cld-public-id="https://res.cloudinary.com/dqeakzmb5/video/upload/v1735826245/video4_suyfjf.mp4"
            controls
            style={styles.video}
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
    flexDirection: "column", // Stack text box above video
    alignItems: "center",
    gap: "30px", // Space between text box and video
    width: "100%",
  },
  videoWrapper: {
    display: "flex",
    justifyContent: "center",
    width: "100%", // Ensure the video wrapper takes full width
  },
  video: {
    width: "100%", // Fixed width
    maxWidth: "600px", // Set maximum width
    height: "338px", // Fixed height (16:9 aspect ratio)
    objectFit: "contain", // Crop to fit the dimensions if needed
    borderRadius: "10px",
    display: "block", // Ensure the video is displayed as a block element
  },
  textBoxWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%", // Ensure the text box wrapper takes full width
  },
  heading: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "10px",
    textAlign: "center",
  },
  h3: {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "8px",
    textAlign: "center",
    color: "#666", // Dark gray color for better readability
    paddingBottom: "5px", // Space between text and the border
    borderBottom: "3px solid #ddd",
    
  },
  textBox: {
    width: "50%",
    height: "250px",
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    resize: "none",
  },
};
export default VideoUploader;