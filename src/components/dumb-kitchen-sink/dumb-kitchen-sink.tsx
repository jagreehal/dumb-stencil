import { Component } from '@stencil/core';

@Component({
  tag: 'dumb-kitchen-sink',
})
export class DumbKitchenSink {
  render() {
    return (<div>Uncomment me</div>)
    // return (
    //   <div>
    //     <dumb-header />
    //     <dumb-hero hero-title="This is my hero" hero-description="This is the hero description text" hero-img-src="http://via.placeholder.com/1200x650" />
    //     <dumb-section section-title="Hi I'm a section title" section-description="This is a description of the section">
    //       <dumb-card-list listItems={[
    //         {
    //           "theme": "dark",
    //           "title": "Squeeze Its",
    //           "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    //         },
    //         {
    //           "title": "Capri Suns",
    //           "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    //         },
    //         {
    //           "title": "Hugs",
    //           "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    //         },
    //         {
    //           "title": "Mondo",
    //           "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    //         }
    //       ]}></dumb-card-list>
    //     </dumb-section>
    //     <dumb-section section-title="Hi I'm another section" section-description="This is a different description">
    //       <div class="l-linelength-container">
    //         <dumb-text-passage>
    //           <p>A text passage contains arbitrary text that might come from a CMS. It should live within a container that caps the line length of the text to avoid a straining reading experience.</p>

    //           <h2>Heading 2</h2>

    //           <p>This is another paragraph of text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

    //           <ul>
    //             <li>Here is a unordered list item</li>
    //             <li>Here is a unordered list item</li>
    //             <li>Here is a unordered list item</li>
    //             <li>Here is a unordered list item</li>
    //           </ul>

    //           <h3>Heading 3</h3>

    //           <ol>
    //             <li>Here is a unordered list item</li>
    //             <li>Here is a unordered list item</li>
    //             <li>Here is a unordered list item</li>
    //             <li>Here is a unordered list item</li>
    //           </ol>

    //           <p><a href="#">Lorem ipsum dolor sit amet</a>, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

    //           <blockquote>
    //             <p>This is a quotation from something.</p>
    //             <cite>Cite source</cite>
    //           </blockquote>

    //           <p>That is all.</p>
    //         </dumb-text-passage>
    //       </div>
    //     </dumb-section>
    //     <dumb-footer></dumb-footer>
    //   </div>
    // );
  }
}
