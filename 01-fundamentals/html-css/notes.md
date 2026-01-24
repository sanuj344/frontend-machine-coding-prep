🌐 What is HTML?

HTML (HyperText Markup Language) is used to create the structure of a web page.
It tells the browser:

what is text
what is image
what is button
what is form
what is header/footer

HTML does NOT give design. It only gives structure.

Example:
<h1>Hello World</h1>
<p>This is a paragraph</p>



🧩 Semantic HTML (Very Important for Interviews)

Semantic tags clearly tell the meaning of content.
They help in:

SEO (Google ranking)
Accessibility (screen readers)
Clean code

Common Semantic Tags:

<header> → top section of website
<nav> → navigation links
<main> → main content
<section> → group of related content
<article> → independent content (blog, post)
<footer> → bottom section

Example:
<header>
  <h1>My Website</h1>
</header>

<nav>
  <a href="#">Home</a>
  <a href="#">About</a>
</nav>

<main>
  <section>
    <article>
      <h2>Blog Title</h2>
      <p>Blog content...</p>
    </article>
  </section>
</main>

<footer>
  Copyright 2026
</footer>


📝 Forms in HTML

Forms are used to take input from users.

Main form elements:

<input> → text, email, password
<textarea> → long text
<select> → dropdown
<button> → submit
<label> → name of input


<form>
  <label>Email:</label>
  <input type="email" />

  <label>Password:</label>
  <input type="password" />

  <button>Login</button>
</form>


🎨 CSS (Styling the Web)

CSS is used to add:

colors
layout
spacing
animations
responsiveness



📦 Box Model (Very Important)

Every HTML element is a box.

It has:

Content → actual text/image
Padding → space inside border
Border → outline
Margin → space outside element

Diagram:

margin
  border
    padding
      content

for example:
 div {
  padding: 10px;
  border: 2px solid black;
  margin: 20px;
}
     

 📐 Display Property

Controls how elements appear.

block → takes full width (div, p, h1)

inline → takes only content width (span)

inline-block → inline but with width/height

flex → layout system

grid → layout system

Example:

div {
  display: flex;
}    


📏 Flexbox (1D Layout)

Used to arrange items in row or column.

Main properties:

justify-content → horizontal alignment
align-items → vertical alignment
flex-direction → row or column

Example:

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}

🧮 Grid (2D Layout)

Used for rows + columns.

Example:

.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
}



📍 Position Property

Controls element placement.

static → default

relative → relative to itself

absolute → relative to nearest positioned parent

fixed → fixed on screen

sticky → sticks while scrolling

Example:

.box {
  position: absolute;
  top: 10px;
  left: 20px;
}


📱 Responsive Design

Website should work on:

mobile

tablet

laptop

Media Query:
@media (max-width: 600px) {
  body {
    background: lightblue;
  }
}


📐 Units

% → relative
px → fixed
rem → based on root font size
em → based on parent size

Best practice: use rem for fonts.