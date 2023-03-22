import React from "react";
import Form from 'react-bootstrap/Form';
import { Button } from "react-bootstrap";
import Checked from "../components/checked";
import "../App.css"

export const Users = () => (
    <div className="content">
        <div className="content__header">
            <h1>Отправка заявки</h1>
        </div>
        <div className="form">
        <Form>
            <fieldset >
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="TextInput">Введите Ваше имя</Form.Label>
                    <Form.Control id="NameInput" placeholder="Имя" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="TextInput">Введите Вашу фамилию</Form.Label>
                    <Form.Control id="SecondNameInput" placeholder="Фамилия" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="TextInput">Введите Ваше отчество (при наличии)</Form.Label>
                    <Form.Control id="SurnameInput" placeholder="Отчество" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="TextInput">Email</Form.Label>
                    <Form.Control id="EmailInput" type="email" placeholder="name@example.com"/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="TextInput">Номер телефона</Form.Label>
                    <Form.Control id="NumberInput" type="tel" pattern="[+7]{3}-[0-9]{2}-[0-9]{2}-[0-9]" placeholder="+79881236790"/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="TextInput">Дата рождения</Form.Label>
                    <Form.Control id="DateInput" type="date"/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="TextInput">Опишите Вашу трудовую деятельность</Form.Label>
                    <Form.Control id="TextInput" as="textarea" rews={5}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Checked/>
                </Form.Group>

            </fieldset>
        </Form>
        </div>
    </div>
);
