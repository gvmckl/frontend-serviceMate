import { useForm } from "react-hook-form";
import styles from "./formsCollaborator.module.css";

interface FormsCollaboratorProp {
  functionForms: () => void;
  methodPost: string;
  linkReturn: () => void;
}

export default function FormsCollaborator({
  functionForms,
  methodPost,
  linkReturn,
}: FormsCollaboratorProp) {
  const { handleSubmit, register } = useForm();

  return (
    <section className={styles["register-container"]}>
      <form
        method="post"
        className={styles["forms"]}
        onSubmit={handleSubmit(functionForms)}
      >
        <div className={styles["forms-container"]}>
          <label className={styles["label-forms"]}>Nome:</label>
          <input
            className={styles["input-geral"]}
            type="text"
            {...register("name")}
            required
          />
        </div>
        <div className={styles["forms-container"]}>
          <label className={styles["label-forms"]}>Email:</label>
          <input
            className={styles["input-geral"]}
            type="email"
            {...register("email")}
            required
          />
        </div>
        <div className={styles["forms-container"]}>
          <label className={styles["label-forms"]}>Senha:</label>
          <input
            className={styles["input-geral"]}
            type="password"
            {...register("password")}
            required
            min={8}
          />
        </div>
        <div className={styles["btn-container"]}>
          <button
            onClick={linkReturn}
            type="button"
            className={`${styles["btn-forms"]} ${styles["cancel"]}`}
          >
            Voltar
          </button>
          <button
            type="submit"
            className={`${styles["btn-forms"]} ${styles["submit"]}`}
          >
            {methodPost}
          </button>
        </div>
      </form>
    </section>
  );
}
