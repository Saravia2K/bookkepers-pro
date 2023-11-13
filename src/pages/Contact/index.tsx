import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { TextField } from "@mui/material";
import TwoBoxesContainer from "../../components/TwoBoxesContainer";

import styles from "./styles.module.scss";
import picture from "./images/Work_Together.jpg";

export default function ContactPage() {
  return (
    <div className={styles["contact-page"]}>
      <h1 className={styles.title}>
        Let's Work <span className={styles.highlight}>Together</span>
      </h1>
      <p className={styles.description}>
        Whether you have a small or mid-size business, we've worked with them
        all - we can help you get where you want to be.
      </p>
      <TwoBoxesContainer
        box1={{
          component: <Box1 />,
          bgColor: "var(--secondary-color)",
          className: styles["box1-container"],
        }}
        box2={{
          component: <Box2 />,
          className: styles.box2,
        }}
      />
    </div>
  );
}

const Box1 = () => {
  const { control, handleSubmit } = useForm<FormInputs>({
    defaultValues: {
      email: "",
      phone: "",
      company_name: "",
      department: "",
      message: "",
    },
  });

  const handleSubmitForm: SubmitHandler<FormInputs> = (data) => {
    console.log(data);
  };

  return (
    <div className={styles.box1}>
      <h2 className={styles["form-title"]}>
        We'll be <span style={{ fontWeight: "bold" }}>happy</span> to hear from
        you
      </h2>
      <form onSubmit={handleSubmit(handleSubmitForm)} className={styles.form}>
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, value } }) => (
            <TextField
              fullWidth
              required
              type="email"
              placeholder="Email"
              className={styles["form-input"]}
              value={value}
              onChange={onChange}
            />
          )}
        />
        <Controller
          control={control}
          name="phone"
          render={({ field: { onChange, value } }) => (
            <TextField
              fullWidth
              required
              placeholder="Phone"
              className={styles["form-input"]}
              value={value}
              onChange={onChange}
            />
          )}
        />
        <Controller
          control={control}
          name="company_name"
          render={({ field: { onChange, value } }) => (
            <TextField
              fullWidth
              required
              placeholder="Company name"
              className={styles["form-input"]}
              value={value}
              onChange={onChange}
            />
          )}
        />
        <Controller
          control={control}
          name="department"
          render={({ field: { onChange, value } }) => (
            <TextField
              fullWidth
              required
              placeholder="Department"
              className={styles["form-input"]}
              value={value}
              onChange={onChange}
            />
          )}
        />
        <Controller
          control={control}
          name="message"
          render={({ field: { onChange, value } }) => (
            <TextField
              fullWidth
              required
              multiline
              rows={5}
              placeholder="Message"
              className={styles["form-input"]}
              value={value}
              onChange={onChange}
            />
          )}
        />
        <button className={styles["submit-btn"]}>SEND</button>
      </form>
    </div>
  );
};

type FormInputs = {
  email: string;
  phone: string;
  company_name: string;
  department: string;
  message: string;
};

const Box2 = () => (
  <img src={picture} alt="Work together" className={styles.picture} />
);
