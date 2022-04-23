import React from "react";
import { useSelector } from "react-redux";
import styles from "./Profile.module.css";

export default function ProfileCredentials() {
  const user = useSelector(state => state.auth.user[0]);
  const sex = useSelector(state => state.auth.sex);
  return (
    <>
      <h3>Личная информация<hr /></h3>
      <div className={styles.row}>
        <label className={styles.label} htmlFor="name">
          <div className={styles.label__name}>Имя</div>
          <div className={styles.label__descript}>
            Имя должно состоять из символов латинского или русского алфавита,
            исключая специальные символы а также знаки препинания
          </div>
          <input className={styles.input} type="text" defaultValue={ user.name } name="name"/>
        </label>
      </div>
      <div className={styles.row}>
        <label className={styles.label} htmlFor="email">
          <div className={styles.label__name}>Email</div>
          <div className={styles.label__descript}>
            Адрес Вашей электронной почты являющийся логином для профиля, любая
            доступная электронная почта
          </div>
          <input className={styles.input} type="text" defaultValue={ user.email } name="email" readOnly={true}/>
        </label>
      </div>
      <div className={styles.row}>
        <label className={styles.label} htmlFor="specialization">
          <div className={styles.label__name}>Ваша специализация</div>
          <div className={styles.label__descript}>
            Кратко: Ваша основная специализация как кондитера, например - торты
          </div>
          <input className={styles.input} type="text" defaultValue="Торты" name="specialization" />
        </label>
      </div>
    </>

  )
}
