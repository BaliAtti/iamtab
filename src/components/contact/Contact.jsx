import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";

const Contact = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    emailjs.send(
    "service_2c21kxp",   // from EmailJS
    "template_epsd69i",  // from EmailJS
    data,
    "y9Z7tsfUGbxF-oX0i"    // from EmailJS
    ).then(
      () => {
        alert("Üzenet elküldve!");
        reset(); // clear the form
      },
      (error) => {
        alert("Hiba történt: " + error.text);
      }
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="row">

        <div className="col-md-6">
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control theme-light"
              placeholder="Teljes név"
              {...register("name", { required: "Név kötelező" })}
            />
            {errors.name && <span className="invalid-feedback">{errors.name.message}</span>}
          </div>
        </div>

        <div className="col-md-6">
          <div className="form-group mb-3">
            <input
              type="email"
              className="form-control theme-light"
              placeholder="Email cím"
              {...register("email", {
                required: "Email kötelező",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Helytelen email cím",
                },
              })}
            />
            {errors.email && <span className="invalid-feedback">{errors.email.message}</span>}
          </div>
        </div>

        <div className="col-12">
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control theme-light"
              placeholder="Tárgy"
              {...register("subject", { required: "Tárgy kötelező" })}
            />
            {errors.subject && <span className="invalid-feedback">{errors.subject.message}</span>}
          </div>
        </div>

        <div className="col-12">
          <div className="form-group mb-3">
            <textarea
              rows="4"
              className="form-control theme-light"
              placeholder="Írd le mit szeretnél"
              {...register("comment", { required: "Üzenet kötelező" })}
            ></textarea>
            {errors.comment && <span className="invalid-feedback">{errors.comment.message}</span>}
          </div>
        </div>

        <div className="col-12">
          <div className="btn-bar">
            <button className="px-btn px-btn-white" type="submit">
              Üzenet küldése
            </button>
          </div>
        </div>

      </div>
    </form>
  );
};

export default Contact;
