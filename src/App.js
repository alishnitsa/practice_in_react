import React, { Component } from 'react';
import './App.css';
import { Car } from './Car/Car.js'

class App extends Component {

   state = { //Данные
      cars: [ //Список машин
         { name: 'Ford', year: 2018 },
         { name: 'Audi', year: 2016 },
         { name: 'Mazda', year: 2010 }
      ],
      pageTitle: 'React components', //Заголовок
      showCars: false //Флаг показа списка
   }

   toggleCarsHandler = () => { //Функция показа/скрытия списка машин
      this.setState({ //Изменение state
         showCars: !this.state.showCars //Изменение на противоположное значение
      })
   }

   onChangeName(name, index) {//Функция изменения заголовка
      const car = this.state.cars[index]
      car.name = name
      const cars = [...this.state.cars] //Копирование массива
      cars[index] = car
      this.setState({ cars })
   }

   deleteHandler(index) {
      const cars = this.state.cars.concat() //Копирование массива
      cars.splice(index, 1) //Удаление по индексу

      this.setState({ cars })

   }

   render() {
      const divStyle = {
         textAlign: 'center'
      }

      let cars = null //Отсутствие списка

      if (this.state.showCars) { //Условие показал ли список
         cars = this.state.cars.map((car, index) => {// Перебор массива машин
            return (
               <Car
                  key={index} //Ключ компонента
                  name={car.name} //Название
                  year={car.year} //Год
                  onDelete={this.deleteHandler.bind(this, index)} //Функция удаления
                  onChangeName={event => this.onChangeName(event.target.value, index)} //Функция изменения заголовка
               />
            )
         })
      }

      return (
         <div style={divStyle}>
            <h1>{this.state.pageTitle}</h1>

            <button
               onClick={this.toggleCarsHandler}
            >Toggle cars</button>

            { cars}
         </div>
      );
   }
}

export default App;
