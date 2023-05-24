import React from 'react'
import MyPhoto from '../img/My_image.png'

class Contact extends React.Component {
  render() {
    return (
      <div class='contact'>
        <div class='profile_image'>
          <img
            src={MyPhoto}
            alt='Photo'
            width='132'
            height='132'
            class='my_image'
          />
        </div>
        <div class='image_links_name2'>
          <h2>Alexander Ugarov</h2>
          <p>Backend developer</p>
        </div>
        <div class='image_links_name3'>
          <a href='https://github.com/G00syara' class='image_links_name3_a'>
            <i class='bx bxl-github'></i>
          </a>
          <a href='https://t.me/Goosyara_0' class='image_links_name3_a'>
            <i class='bx bxl-telegram'></i>
          </a>
          <a href='https://vk.com/prekrasniy__mir' class='image_links_name3_a'>
            <i class='bx bxl-vk'></i>
          </a>
        </div>
      </div>
    )
  }
}
export default Contact
