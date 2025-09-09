import React from 'react'
import SocialMedia from './socialMedia'
import TableContent from './tableofcontent/page'
function LeftSidebar() {
    return (

        <div className="bg-white text-darkblue ">

            <div className='tablecontent'>
                <TableContent />

            </div>

            {/* Blog Content */}
            <div className="blog-detail ">
                {/* Paragraphs */}
                <p >
                    Figma ipsum component variant main layer. Bullet shadow export figjam
                    frame component slice star ipsum. Ellipse fill rectangle slice scale.
                    Boolean pencil invite outline move object flows arrow. Export auto
                    pixel strikethrough follower. Effect team vector prototype figma
                    shadow strikethrough. Underline move device text.
                </p>

                <iframe src="https://www.youtube.com/embed/DZKOunP-WLQ?si=P21Ru11Eq0M6vwLm" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>

                <p >
                    Figma ipsum component variant main layer. Layer group figma mask
                    rotate image italic. Outline frame align arrange pencil union group
                    pen follower. Content boolean blur layout rotate prototype. Project
                    inspect union strikethrough outline list distribute align list
                    ellipse. Pencil vector boolean shadow shadow horizontal asset outline
                    library. Inspect inspect align auto fill library invite plugin. Align
                    text pencil inspect editor fill. Resizing object pen editor rectangle
                    outline line arrow.
                </p>

                {/* Image */}

                <img
                    src="/images/gallery4.jpg"
                    alt="Classroom"

                />


                {/* Another Paragraph */}
                <p >
                    Figma ipsum component variant main layer. Pixel flatten inspect italic
                    horizontal prototype stroke star align. Scrolling pen list rectangle
                    share project object move strikethrough variant. Star arrange effect
                    union share subtract. Mask ipsum arrange invite library stroke hand
                    component. Auto clip subtract bullet undo draft. Link component select
                    invite line. Follower duplicate bullet bold background stroke
                    prototype library inspect. Background follower community device
                    select. Text inspect project arrow frame. Comment comment outline
                    opacity share link clip list.
                </p>


                <video
                    controls
                    autoPlay
                    muted
                    loop
                    playsInline
                    src='/video/nextjs.mp4'
                    type="video/mp4"
                >
                </video>


                {/* Subheading */}
                <h2>Impact on Our Academic Programs</h2>

                <p >
                    Figma ipsum component variant main layer. Scale resizing align auto
                    strikethrough italic hand duplicate group. Fill inspect hand select
                    font link. Ellipse pixel pencil main invite editor vertical. Italic
                    distribute select italic flatten invite background editor effect
                    arrow. Frame community mask prototype outline. Arrange flows variant
                    scrolling layer figma horizontal follower. Selection resizing draft
                    move arrange. Resizing group plugin star arrow main list scale.
                    Inspect.
                </p>

                <video
                    controls
                    autoPlay
                    muted
                    loop
                    playsInline
                    src='https://www.w3schools.com/html/mov_bbb.mp4'
                    type="video/mp4"
                >
                </video>

                {/* Highlighted Section */}

                <blockquote >
                    This exciting development marks a significant milestone in our
                    commitment to providing top-tier educational facilities and
                    fostering a love for science, technology, engineering, and
                    mathematics among our students.
                </blockquote>


                {/* Closing Paragraph */}
                <p >
                    With the opening of our new STEM lab, EdmunHigh continues to lead the
                    way in innovative education, providing students with the tools they
                    need to succeed in the 21st century. We look forward to seeing the
                    incredible projects and discoveries that will come from this
                    state-of-the-art facility.
                </p>
            </div>


            <SocialMedia />
        </div>

    )
}

export default LeftSidebar