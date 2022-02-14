import React, { useState } from "react";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { Label } from "../Label/Label";
import { Select } from "../Select/Select";
import { Textarea } from "../Textarea/Textarea";
import { changeInput } from "../../../utils/change";
import { maskDate, maskTelephone } from "../../../utils/masks";

import s from "./Form.module.scss";

export const Form = () => {
  const [form, setForm] = useState({
    name: "",
    select: "",
    email: "",
    tel: "",
    dateOt: "",
    dateDo: "",
    comment: "",
  });

  const changeInputHandler = (e) => {
    const { id } = e.target;
    changeInput(e, form, setForm);

    if (id === "tel") {
      setForm({ ...form, tel: maskTelephone(e) });
    }

    if (id === "dateOt" || id === "dateDo") {
      setForm({ ...form, [id]: maskDate(e) });
    }
  };

  return (
    <form className={s.form}>
      <div className={s.formItem}>
        <Label id="name">Имя</Label>
        <Input id="name" label="Имя" placeholder="Введите Ваше имя" value={form.name} onChange={changeInputHandler} />
      </div>
      <div className={s.formItem}>
        <Label id="select">Направление</Label>
        <Select id="select" options={["1", "2", "3"]} />
      </div>
      <div className={s.formItem}>
        <Label id="email">Email</Label>
        <Input id="email" label="Email" placeholder="example@mail.com" value={form.email} type="email" onChange={changeInputHandler} />
      </div>
      <div className={s.formItem}>
        <Label id="tel">Телефон</Label>
        <Input id="tel" label="Телефон" placeholder="8 (___)-___-__-__" value={form.tel} type="tel" onChange={changeInputHandler} />
      </div>
      <div className={s.formItem}>
        <Label id="dateOt">Дата от</Label>
        <Input id="dateOt" label="Дата от" placeholder="ДД.ММ.ГГГГ" value={form.dateOt} onChange={changeInputHandler} />
      </div>
      <div className={s.formItem}>
        <Label id="dateDo">Дата до</Label>
        <Input id="dateDo" label="Дата до" placeholder="ДД.ММ.ГГГГ" value={form.dateDo} onChange={changeInputHandler} />
      </div>
      <div className={s.formComment}>
        <Label id="comment">Комментарий</Label>
        <Textarea id="comment" placeholder="Комментарий" onChange={changeInputHandler} value={form.comment} />
      </div>
      <div className={s.formItem}>
        <Label id="label">Вам есть 18 лет?</Label>
        <div className={s.formRadioBtns}>
          <strong className={s.formStrong}>
            <input name="year" id="yes" type="radio" hidden className={s.formRadio} />
            <label htmlFor="yes" className={s.formRadioLabel}>
              <div className={s.formRadioLabelChecked}></div>
            </label>
            <span>Да</span>
          </strong>
          <strong className={s.formStrong}>
            <input name="year" id="no" type="radio" hidden className={s.formRadio} />
            <label htmlFor="no" className={s.formRadioLabel}>
              <div className={s.formRadioLabelChecked}></div>
            </label>
            <span>Нет</span>
          </strong>
        </div>
      </div>
      <div className={s.formContract}>
        <input type="checkbox" id="contract" hidden className={s.formCheckbox} />
        <label htmlFor="contract" className={s.formContractLabel}></label>
        <span>
          Нажимая кнопку, я принимаю условия <strong>Лицензионного договора</strong>
        </span>
      </div>
      <div className={s.formButtons}>
        <Button className={s.findBtn} color="green">
          Найти тур
        </Button>
        <Button className={s.resetBtn} color="lightgreen">
          Сбросить
        </Button>
      </div>
    </form>
  );
};
