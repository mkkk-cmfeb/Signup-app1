function App() {
  return (
    <>
      <h1>Sign Up Form</h1>

      <form>

        <input
          type="text"
          placeholder="Username"
        />

        <br /><br />

        <input
          type="email"
          placeholder="Email"
        />

        <br /><br />

        <input
          type="password"
          placeholder="Password"
        />

        <br /><br />

        <button>
          Submit
        </button>

      </form>
    </>
  );
}

export default App;