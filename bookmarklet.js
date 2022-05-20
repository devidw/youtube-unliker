// ==Bookmarklet==
// @name YouTube Bulk Unlike
// @author David Wolf
// ==/Bookmarklet==

// Let the magic begin!

;(() => {
  /**
   *
   */
  const unlikeVid = (video) => {
    const menuBtn = video.querySelector(
      "yt-icon-button#button.dropdown-trigger.style-scope.ytd-menu-renderer"
    )
    console.log(`Found menu button:`, menuBtn)

    menuBtn.click()

    setTimeout(() => {
      const rmBtn = document.querySelector(
        "ytd-popup-container tp-yt-paper-listbox ytd-menu-service-item-renderer:last-of-type"
      )
      console.log(`Found remove button:`, rmBtn)

      rmBtn.click()

      video.remove()
    }, 500)
  }

  const videos = document.querySelectorAll("ytd-playlist-video-renderer")

  // Loop over video with 1000ms delay
  videos.forEach((video, index) => {
    setTimeout(() => {
      unlikeVid(video)
    }, index * 1000)
  })
})()
