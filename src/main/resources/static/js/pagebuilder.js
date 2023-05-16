const editor = grapesjs.init({
    showOffsets: 1,
    noticeOnUnload: 0,
    container: '#gjs',
    height: '800px',
    width: 'auto',
    fromElement: true,
    storageManager: false,
    canvas: {
        styles: ['/css/bootstrap.css'],
    },

    assetManager: {
        upload: '/api/page/upload-image',
    },

    blockManager: {
        blocks: [
            {
                id: 'section', // id is mandatory
                label: '<b>Section</b>', // You can use HTML/SVG inside labels
                category: 'Basic',
                attributes: { class:'gjs-block-section' },
                content: `<section>
              <h1>This is a simple title</h1>
              <div>This is just a Lorem text: Lorem ipsum dolor sit amet</div>
            </section>`,
            }, {
                id: 'text',
                label: 'Text',
                category: 'Basic',
                content: '<div data-gjs-type="text">Insert your text here</div>',
            },
            {
                id: 'image',
                label: 'Image',
                // Select the component once it's dropped
                category: 'Basic',
                select: true,
                // You can pass components as a JSON instead of a simple HTML string,
                // in this case we also use a defined component type `image`
                content: { type: 'image' },
                // This triggers `active` event on dropped components and the `image`
                // reacts by opening the AssetManager
                activate: true,
            }
        ]
    },

    styleManager : {
        sectors: [{
            name: 'General',
            open: false,
            buildProps: ['float', 'display', 'position', 'top', 'right', 'left', 'bottom']
        },{
            name: 'Flex',
            open: false,
            buildProps: ['flex-direction', 'flex-wrap', 'justify-content', 'align-items', 'align-content', 'order', 'flex-basis', 'flex-grow', 'flex-shrink', 'align-self']
        },{
            name: 'Dimension',
            open: false,
            buildProps: ['width', 'height', 'max-width', 'min-height', 'margin', 'padding'],
        },{
            name: 'Typography',
            open: false,
            buildProps: ['font-family', 'font-size', 'font-weight', 'letter-spacing', 'color', 'line-height', 'text-shadow'],
        },{
            name: 'Decorations',
            open: false,
            buildProps: ['border-radius-c', 'background-color', 'border-radius', 'border', 'box-shadow', 'background'],
        },{
            name: 'Extra',
            open: false,
            buildProps: ['transition', 'perspective', 'transform'],
        }
        ],
    },
});


editor.Blocks.add('my-bootstrap-block', {
    id: 'centeredHero',
    label: 'Centered hero',
    category: 'Heroes Blocks',
    content: `
  <div class="px-4 py-5 my-5 text-center">
    <img class="d-block mx-auto mb-4" src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="144" height="114">
    <h1 class="display-5 fw-bold">Centered hero</h1>
    <div class="col-lg-6 mx-auto">
      <p class="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button type="button" class="btn btn-primary btn-lg px-4 gap-3">Primary button</button>
        <button type="button" class="btn btn-outline-secondary btn-lg px-4">Secondary</button>
      </div>
    </div>
  </div>
  `,
});

editor.Blocks.add('my-bootstrap-block-2', {
    id: 'centeredScreenshot',
    label: 'Centered screenshot',
    category: 'Heroes Blocks',
    content: `
  <div class="px-4 pt-5 my-5 text-center border-bottom">
    <h1 class="display-4 fw-bold">Centered screenshot</h1>
    <div class="col-lg-6 mx-auto">
      <p class="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
        <button type="button" class="btn btn-primary btn-lg px-4 me-sm-3">Primary button</button>
        <button type="button" class="btn btn-outline-secondary btn-lg px-4">Secondary</button>
      </div>
    </div>
    <div class="overflow-hidden" style="max-height: 30vh;">
      <div class="container px-5">
        <img src="https://getbootstrap.com/docs/5.3/examples/heroes/bootstrap-docs.png" class="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" width="700" height="500" loading="lazy">
      </div>
    </div>
  </div>
  `,
});

editor.Blocks.add('my-bootstrap-block-3', {
    id: 'leftAlignedHero',
    label: 'Left-aligned hero',
    category: 'Heroes Blocks',
    content: `
  <div class="container col-xxl-8 px-4 py-5">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div class="col-10 col-sm-8 col-lg-6">
        <img src="https://getbootstrap.com/docs/5.3/examples/heroes/bootstrap-themes.png" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy">
      </div>
      <div class="col-lg-6">
        <h1 class="display-5 fw-bold lh-1 mb-3">Responsive left-aligned hero with image</h1>
        <p class="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">Primary</button>
          <button type="button" class="btn btn-outline-secondary btn-lg px-4">Default</button>
        </div>
      </div>
    </div>
  </div>
  `,
});

editor.Blocks.add('my-bootstrap-block-4', {
    id: 'darkModeHero',
    label: 'Dark mode hero',
    category: 'Heroes Blocks',
    content: `
  <div class="bg-dark text-secondary px-4 py-5 text-center">
    <div class="py-5">
      <h1 class="display-5 fw-bold text-white">Dark mode hero</h1>
      <div class="col-lg-6 mx-auto">
        <p class="fs-5 mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button type="button" class="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold">Custom button</button>
          <button type="button" class="btn btn-outline-light btn-lg px-4">Secondary</button>
        </div>
      </div>
    </div>
  </div>
  `,
});

editor.Blocks.add('my-bootstrap-block-5', {
    id: 'columnsWithIcons',
    label: 'Columns with icons',
    category: 'Features',
    content: `
  <div class="container px-4 py-5" id="featured-3">
    <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
      <div class="feature col">
        <div class="feature-icon d-inline-flex align-items-center justify-content-center fs-2 mb-3">
          <img src="https://cdn-icons-png.flaticon.com/512/9285/9285457.png" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="60px" loading="lazy">
        </div>
        <h3 class="fs-2">Featured title</h3>
        <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
        <a href="#" class="icon-link d-inline-flex align-items-center">
          Call to action
        </a>
      </div>
      <div class="feature col">
        <div class="feature-icon d-inline-flex align-items-center justify-content-center fs-2 mb-3">
          <img src="https://cdn-icons-png.flaticon.com/512/9285/9285457.png" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="60px" loading="lazy">
        </div>
        <h3 class="fs-2">Featured title</h3>
        <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
        <a href="#" class="icon-link d-inline-flex align-items-center">
          Call to action
        </a>
      </div>
      <div class="feature col">
        <div class="feature-icon d-inline-flex align-items-center justify-content-center fs-2 mb-3">
          <img src="https://cdn-icons-png.flaticon.com/512/9285/9285457.png" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="60px" loading="lazy">
        </div>
        <h3 class="fs-2">Featured title</h3>
        <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
        <a href="#" class="icon-link d-inline-flex align-items-center">
          Call to action
        </a>
      </div>
    </div>
  </div>
  `,
});

editor.Blocks.add('my-bootstrap-block-6', {
    id: 'customCards',
    label: 'Custom cards',
    category: 'Features',
    content: `
<div class="container px-4 py-5" id="custom-cards">
    <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
      <div class="col">
        <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style="background-image: url('https://getbootstrap.com/docs/5.3/examples/features/unsplash-photo-1.jpg');">
          <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
            <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Short title, long jacket</h3>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style="background-image: url('https://getbootstrap.com/docs/5.3/examples/features/unsplash-photo-2.jpg');">
          <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
            <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Much longer title that wraps to multiple lines</h3>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style="background-image: url('https://getbootstrap.com/docs/5.3/examples/features/unsplash-photo-3.jpg');">
          <div class="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
            <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Another longer title belongs here</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
  `,
});

editor.Blocks.add('my-bootstrap-block-7', {
    id: 'iconGrid',
    label: 'Icon-grid',
    category: 'Features',
    content: `
  <div class="container px-4 py-5" id="icon-grid">
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
      <div class="col d-flex align-items-start">
       <img src="https://cdn-icons-png.flaticon.com/512/9285/9285482.png" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="60px" loading="lazy">
        <div>
          <h3 class="fw-bold mb-0 fs-4">Featured title</h3>
          <p>Paragraph of text beneath the heading to explain the heading.</p>
        </div>
      </div>
      <div class="col d-flex align-items-start">
        <img src="https://cdn-icons-png.flaticon.com/512/9285/9285482.png" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="60px" loading="lazy">
        <div>
          <h3 class="fw-bold mb-0 fs-4">Featured title</h3>
          <p>Paragraph of text beneath the heading to explain the heading.</p>
        </div>
      </div>
      <div class="col d-flex align-items-start">
        <img src="https://cdn-icons-png.flaticon.com/512/9285/9285482.png" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="60px" loading="lazy">
        <div>
          <h3 class="fw-bold mb-0 fs-4">Featured title</h3>
          <p>Paragraph of text beneath the heading to explain the heading.</p>
        </div>
      </div>
      <div class="col d-flex align-items-start">
        <img src="https://cdn-icons-png.flaticon.com/512/9285/9285482.png" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="60px" loading="lazy">
        <div>
          <h3 class="fw-bold mb-0 fs-4">Featured title</h3>
          <p>Paragraph of text beneath the heading to explain the heading.</p>
        </div>
      </div>
      <div class="col d-flex align-items-start">
        <img src="https://cdn-icons-png.flaticon.com/512/9285/9285482.png" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="60px" loading="lazy">
        <div>
          <h3 class="fw-bold mb-0 fs-4">Featured title</h3>
          <p>Paragraph of text beneath the heading to explain the heading.</p>
        </div>
      </div>
      <div class="col d-flex align-items-start">
        <img src="https://cdn-icons-png.flaticon.com/512/9285/9285482.png" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="60px" loading="lazy">
        <div>
          <h3 class="fw-bold mb-0 fs-4">Featured title</h3>
          <p>Paragraph of text beneath the heading to explain the heading.</p>
        </div>
      </div>
      <div class="col d-flex align-items-start">
       <img src="https://cdn-icons-png.flaticon.com/512/9285/9285482.png" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="60px" loading="lazy">
        <div>
          <h3 class="fw-bold mb-0 fs-4">Featured title</h3>
          <p>Paragraph of text beneath the heading to explain the heading.</p>
        </div>
      </div>
      <div class="col d-flex align-items-start">
        <img src="https://cdn-icons-png.flaticon.com/512/9285/9285482.png" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="60px" loading="lazy">
        <div>
          <h3 class="fw-bold mb-0 fs-4">Featured title</h3>
          <p>Paragraph of text beneath the heading to explain the heading.</p>
        </div>
      </div>
    </div>
  </div>
  `,
});

editor.Blocks.add('my-bootstrap-block-8', {
    id: 'featuresWithTitle',
    label: 'Features with title',
    category: 'Features',
    content: `
<div class="container px-4 py-5">
    
        <div class="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
      <div class="col d-flex flex-column align-items-start gap-2">
        <h3 class="fw-bold">Left-aligned title explaining these awesome features</h3>
        <p class="text-muted">Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
        <a href="#" class="btn btn-primary btn-lg">Primary button</a>
      </div>

      <div class="col">
        <div class="row row-cols-1 row-cols-sm-2 g-4">
          <div class="col d-flex flex-column gap-2">
            <div class="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
<img src="https://cdn-icons-png.flaticon.com/512/9285/9285482.png" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="60px" loading="lazy">
            </div>
            <h4 class="fw-semibold mb-0">Featured title</h4>
            <p class="text-muted">Paragraph of text beneath the heading to explain the heading.</p>
          </div>

          <div class="col d-flex flex-column gap-2">
            <div class="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
<img src="https://cdn-icons-png.flaticon.com/512/9285/9285482.png" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="60px" loading="lazy">
            </div>
            <h4 class="fw-semibold mb-0">Featured title</h4>
            <p class="text-muted">Paragraph of text beneath the heading to explain the heading.</p>
          </div>

          <div class="col d-flex flex-column gap-2">
            <div class="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
<img src="https://cdn-icons-png.flaticon.com/512/9285/9285482.png" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="60px" loading="lazy">
            </div>
            <h4 class="fw-semibold mb-0">Featured title</h4>
            <p class="text-muted">Paragraph of text beneath the heading to explain the heading.</p>
          </div>

          <div class="col d-flex flex-column gap-2">
            <div class="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
<img src="https://cdn-icons-png.flaticon.com/512/9285/9285482.png" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="60px" loading="lazy">
            </div>
            <h4 class="fw-semibold mb-0">Featured title</h4>
            <p class="text-muted">Paragraph of text beneath the heading to explain the heading.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  `,
});

editor.Blocks.add('my-bootstrap-block-9', {
    id: 'album',
    label: 'Album',
    category: 'Custom Components',
    content: `
<main>

  <section class="py-5 text-center container">
    <div class="row py-lg-5">
      <div class="col-lg-6 col-md-8 mx-auto">
        <h1 class="fw-light">Album example</h1>
        <p class="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
        <p>
          <a href="#" class="btn btn-primary my-2">Main call to action</a>
          <a href="#" class="btn btn-secondary my-2">Secondary action</a>
        </p>
      </div>
    </div>
  </section>

  <div class="album py-5 bg-light">
    <div class="container">

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div class="col">
          <div class="card shadow-sm">
            <img src="https://getbootstrap.com/docs/5.3/examples/features/unsplash-photo-2.jpg" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="100%" height="225" loading="lazy"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
            <div class="card-body">
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                <small class="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
             <img src="https://getbootstrap.com/docs/5.3/examples/features/unsplash-photo-2.jpg" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="100%" height="225" loading="lazy"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
            <div class="card-body">
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                <small class="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
             <img src="https://getbootstrap.com/docs/5.3/examples/features/unsplash-photo-2.jpg" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="100%" height="225" loading="lazy"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
            <div class="card-body">
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                <small class="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</main>
  `,
});

editor.Blocks.add('my-bootstrap-block-10', {
    id: 'productExample',
    label: 'Product Example',
    category: 'Custom Components',
    content: `
  <div class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
    <div class="text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
      <div class="my-3 py-3">
        <h2 class="display-5">Another headline</h2>
        <p class="lead">And an even wittier subheading.</p>
      </div>
      <div class="bg-light shadow-sm mx-auto" style="width: 80%; height: 300px; border-radius: 21px 21px 0 0;"></div>
    </div>
    <div class="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
      <div class="my-3 p-3">
        <h2 class="display-5">Another headline</h2>
        <p class="lead">And an even wittier subheading.</p>
      </div>
      <div class="bg-dark shadow-sm mx-auto" style="width: 80%; height: 300px; border-radius: 21px 21px 0 0;"></div>
    </div>
  </div>
  `,
});

editor.Blocks.add('my-bootstrap-block-11', {
    id: 'cards',
    label: 'Two cards',
    category: 'Custom Components',
    content: `
<div class="row">
  <div class="col-sm-6 mb-3 mb-sm-0">
    <div class="card mb-3">
  <img src="https://getbootstrap.com/docs/5.3/examples/features/unsplash-photo-3.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
  </div>
</div>

  </div>
  <div class="col-sm-6">
    <div class="card mb-3">
  <img src="https://getbootstrap.com/docs/5.3/examples/features/unsplash-photo-3.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
  </div>
</div>
  </div>
</div>
  `,
});

editor.Blocks.add('my-bootstrap-block-12', {
    id: 'threeCards',
    label: 'Three cards',
    category: 'Custom Components',
    content: `
<div class="card-group">
  <div class="card">
    <img src="https://getbootstrap.com/docs/5.3/examples/features/unsplash-photo-1.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
  </div>
  <div class="card">
    <img src="https://getbootstrap.com/docs/5.3/examples/features/unsplash-photo-1.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
    </div>
  </div>
  <div class="card">
    <img src="https://getbootstrap.com/docs/5.3/examples/features/unsplash-photo-1.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
  </div>
</div>
  `,
});

editor.Blocks.add('my-bootstrap-block-13', {
    id: 'staticHeader',
    label: 'Static Header',
    category: 'Custom Components',
    content: `
<div style="background: url(https://bootstrapious.com/i/snippets/sn-static-header/background.jpg)" class="jumbotron bg-cover text-white">
    <div class="container py-5 text-center">
        <h1 class="display-4 font-weight-bold">Bootstrap static header</h1>
        <p class="font-italic mb-0">Using simple jumbotron-style component, create a nice Bootstrap 4 header with a background image.</p>
        <p class="font-italic">Snippe by
            <a href="https://bootstrapious.com" class="text-white">
                <u>Bootstrapious</u>
            </a>
        </p>
        <a href="#" role="button" class="btn btn-primary px-5">See All Features</a>
    </div>
</div>
  `,
});

editor.Blocks.add('my-bootstrap-block-14', {
    id: 'productRowRight',
    label: 'Product Row Right',
    category: 'Custom Components',
    content: `
                <div class="row gx-0 mb-5 mb-lg-0 justify-content-center">
                    <div class="col-lg-6"><img class="img-fluid" src="https://startbootstrap.github.io/startbootstrap-grayscale/assets/img/bg-masthead.jpg" alt="..." /></div>
                    <div class="col-lg-6">
                        <div class="bg-black text-center h-100 project">
                            <div class="d-flex h-100">
                                <div class="project-text w-100 my-auto text-center text-lg-left">
                                    <h4 class="text-white">Misty</h4>
                                    <p class="mb-0 text-white-50">An example of where you can put an image of a project, or anything else, along with a description.</p>
                                    <hr class="d-none d-lg-block mb-0 ms-0" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
  `,
});

editor.Blocks.add('my-bootstrap-block-15', {
    id: 'productRowLeft',
    label: 'Product Row Left',
    category: 'Custom Components',
    content: `
                <div class="row gx-0 justify-content-center">
                    <div class="col-lg-6"><img class="img-fluid" src="https://startbootstrap.github.io/startbootstrap-grayscale/assets/img/bg-masthead.jpg" alt="..." /></div>
                    <div class="col-lg-6 order-lg-first">
                        <div class="bg-black text-center h-100 project">
                            <div class="d-flex h-100">
                                <div class="project-text w-100 my-auto text-center text-lg-right">
                                    <h4 class="text-white">Mountains</h4>
                                    <p class="mb-0 text-white-50">Another example of a project with its respective description. These sections work well responsively as well, try this theme on a small screen!</p>
                                    <hr class="d-none d-lg-block mb-0 me-0" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
  `,
});

editor.Blocks.add('my-bootstrap-block-16', {
    id: 'textLeft',
    label: 'Text Left',
    category: 'Basic',
    content: `
        <div class="mt-3 mb-3">
            <p class="font-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.</p>
            <p class="font-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.</p>
        </div>
  `,
});

editor.Blocks.add('my-bootstrap-block-17', {
    id: 'textCenter',
    label: 'Text Center',
    category: 'Basic',
    content: `
<div class="mt-3 mb-3">
    <p class="font-italic text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.</p>
    <p class="font-italic text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.</p>
</div>
  `,
});

editor.Blocks.add('my-bootstrap-block-18', {
    id: 'textRight',
    label: 'Text Right',
    category: 'Basic',
    content: `
<div class="mt-3 mb-3">
            <p class="font-italic text-end">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.</p>
            <p class="font-italic text-end">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.</p>
</div>
  `,
});

editor.Blocks.add('my-bootstrap-block-19', {
    id: 'headerH3center',
    label: 'Header H3 Center',
    category: 'Basic',
    content: `
<div class="mt-3 mb-3">
    <h2 class="h3 font-weight-bold text-center">Some demo content</h2>
</div>
  `,
});

editor.Blocks.add('my-bootstrap-block-20', {
    id: 'headerH3left',
    label: 'Header H3 Left',
    category: 'Basic',
    content: `
<div class="mt-3 mb-3">
    <h2 class="h3 font-weight-bold">Some demo content</h2>
</div>
  `,
});


var data;

editor.on('component:update', () => {
    const components = editor.DomComponents.getComponents();
    data = [];

    for (const component of components) {
        const type = component.get('type');
        const text = component.toHTML();
        data.push({ type, text});
    }

});

let id = document.getElementById("id");
let title = document.getElementById("title")
let siteId = document.getElementById("idSite")
console.log(siteId)

function savePage(){
    const request = new XMLHttpRequest();
    request.onreadystatechange = function (){
        if (this.readyState === request.DONE && this.status === 200) {
            console.log(JSON.parse(this.responseText));
        }
    }
    let jsonBody = {"title": title.value, "htmlCode": "data", "blocks": data, "webSiteId": siteId.value};
    request.open("PUT", "/api/page/"+id.value);
    request.setRequestHeader("Content-Type", "application/json; charset=UTF-8")
    request.send(JSON.stringify(jsonBody));
}


let admin = false;
let isAdmin = document.getElementById("isAdmin");
if(isAdmin!=null&&isAdmin.value){
    admin = true;
}

if(admin){
    loadPage(id.value);
}else loadPageForUser(id.value);



function loadPage(id){
    const request = new XMLHttpRequest();
    request.onreadystatechange = function (){
        if(request.readyState === request.DONE){
            if(request.status===200) {
                let result = JSON.parse(request.responseText);
                let allBlocks = result.blocks;
                console.log(allBlocks);
                for(let html of allBlocks){
                    editor.addComponents(html.text);
                }
            }
        }
    }
    request.open("GET", "/api/page/"+id);
    request.send();
}

function loadPageForUser(id){
    const request = new XMLHttpRequest();
    request.onreadystatechange = function (){
        if(request.readyState === request.DONE){
            if(request.status===200) {
                let result = JSON.parse(request.responseText);
                let allBlocks = result.blocks;
                let htmlCode = "";
                for(let html of allBlocks){
                    htmlCode += html.text;
                }
                document.getElementById("post").innerHTML = htmlCode;
            }
        }
    }
    request.open("GET", "/api/page/"+id);
    request.send();
}

function deletePage(){
    let conf = confirm("ARE YOU SURE?")
    if(conf){
        const request = new XMLHttpRequest();
        request.onreadystatechange = function (){
            if(request.readyState===request.DONE){
                if(request.status===200){
                    window.location.href = '/';
                }
            }
        }
        request.open("DELETE", "/api/page/"+id.value);
        request.send();
    }
}

function exportPage(){
    savePage();
    let url = "/api/page/exportPage/"+id.value;
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.responseType = 'blob';
    xhr.onload = function(e) {
        if (xhr.status == 200) {
            let blob = new Blob([this.response], {type: 'text/html'});
            let downloadUrl = URL.createObjectURL(blob);
            let a = document.createElement("a");
            a.href = downloadUrl;
            a.download = "exported_page.html";
            document.body.appendChild(a);
            a.click();
            a.remove();
        }
    };
    xhr.send();


}