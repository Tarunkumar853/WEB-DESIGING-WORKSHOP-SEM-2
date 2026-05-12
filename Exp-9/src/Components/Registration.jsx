import { useState } from 'react'




function Registration() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");
  const [users, setUsers] = useState([]);

  const handleSubmit = (e) => {

    e.preventDefault();

    let formErrors = {};

    if (name.trim() === "") {
      formErrors.name = "Name is required";
    }

    if (!email.includes("@")) {
      formErrors.email = "Email must include @";
    }

    if (password.length < 6) {
      formErrors.password = "Password should be at least 6 characters";
    }

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      setSuccess("");
    }
    else {
            setErrors({});
            setSuccess("Registration Successful");

            const newUser = {
                name: name,
                email: email
            };

            setUsers([...users, newUser]);

            setName("");
            setEmail("");
            setPassword("");
        }
  }

  return (
    <>
      <div className="container">

        <h2>Registration Form</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <p>{errors.name}</p>

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <p>{errors.email}</p>

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <p>{errors.password}</p>

          <button type="submit">Register</button>

          <p>{success}</p>

        </form>
        <div className="user-list">
            <h3>Registered Users</h3>

             {users.map((user, index) => (
             <p key={index}>
             {user.name} - {user.email}
                </p>
            ))}
        </div>

      </div>
    </>
  )
}

export default Registration