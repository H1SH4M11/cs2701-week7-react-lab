import React from 'react'; // We still need to import React itself

// --- Header Component ---
// I've moved the Header component from its own file into this one.
// It receives "props" (imgSrc, alt) from the App component below.
function Header({ imgSrc, alt }) {
  return (
    <header>
      <img
        src={imgSrc}
        alt={alt}
        style={{
          height: "200px",
          width: "100%",
          objectFit: "contain",
          objectPosition: "center",
        }}
      />
    </header>
  );
}

// --- Sidebar Component ---
// I've moved the Sidebar component here as well.
function Sidebar() {
  return (
    <aside>
      <input
        type="text"
        className="search"
        id="search"
        name="search"
        placeholder="Search"
      />
      <br />
    </aside>
  );
}

// --- RegistrationForm Component ---
// This is the form component, also moved here.
// It contains the handleSubmit logic for the Challenge Activity.
function RegistrationForm() {
  
  // This function runs when the form is submitted
  function handleSubmit(e) {
    // 1. Stop the page from refreshing
    e.preventDefault();

    // 2. Create a FormData object from the form
    const formData = new FormData(e.target);

    // 3. Extract the name and email values
    const name = formData.get("name");
    const email = formData.get("email");

    // 4. Display them in an alert
    alert(`Submitted: ${name} — ${email}`);
  }

  return (
    <section>
      {/* The form's onSubmit event is linked to the handleSubmit function 
      */}
      <form className="center" noValidate onSubmit={handleSubmit}>
        {/* Note: In JSX, 'class' becomes 'className' and 'for' becomes 'htmlFor'
        */}
        <label className="textInput" htmlFor="name">
          Name:
        </label>
        <input type="text" id="name" name="name" required maxLength="50" />
        <br />
        <br />

        <label className="textInput" htmlFor="email">
          Email:
        </label>
        <input type="email" id="email" name="email" required />
        <br />
        <br />

        <label className="textInput" htmlFor="password">
          Password:
        </label>
        <input
          type="password"
          id="password"
          name="password"
          required
          minLength="8"
        />
        <br />
        <br />

        <label className="textInput" htmlFor="repPassword">
          Re-type password:
        </label>
        <input
          type="password"
          id="repPassword"
          name="repPassword"
          required
          minLength="8"
        />
        <br />
        <br />

        <input type="checkbox" id="buyer" name="buyer" value="buyer" />
        <label htmlFor="buyer">
          I want to buy produce directly from allotment owners.
        </label>
        <br />
        <input type="checkbox" id="seller" name="seller" value="seller" />
        <label htmlFor="seller">I want to sell produce from my allotment.</label>
        <br />
        <br />

        <input type="checkbox" id="tos" name="tos" value="tos" required />
        <label htmlFor="tos">
          I agree to the <a href="">Terms of Use</a> and{" "}
          <a href="">Privacy Policy</a>.
        </label>
        <br />
        <br />

        <button type="submit">Register</button>
        <a href="">Learn more</a>
      </form>
    </section>
  );
}


// --- Main App Component ---
// This is your main App component. It assembles all the
// other components (defined above) to build the page.
function App() {
  return (
    // We use a React "Fragment" (empty brackets) to wrap our components
    <>
      {/* We pass the image path and alt text as "props" to our Header component.
        This completes Activity 2's "Using Props" task.
      */}
      <Header imgSrc="/SharingFood.jpg" alt="Hands holding tomatoes" />

      <main>
        {/* The Sidebar and RegistrationForm components are nested in main */}
        <Sidebar />
        <RegistrationForm />
      </main>
    </>
  );
}

export default App;