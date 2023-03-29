// ไม่มี silver bullet
//! ถ้าเราดู code คนอื่นก่อนเขียน มันจะครอบงำเรา => ไม่ได้เรียนรู้
// assessment เอาไปให้คุณให้โทษ => เราควรบอกตัวเองได้ว่าเราไม่รู้อะไร หรือทำอะไรไม่ได้ => การพัฒนาตัวเอง

// เกม // terminal => lib promt
// 1 แผนที่
// 2 กติกา
// 3 รับข้อมูล => เพื่อบังคับตัวละคร
// ....

// const obj = {
//     field: value
// }

// class constructor => สร้าง instance ออกมา instance ก็จะหน้าตาเหมือนกับ class
class Game {
    // keyword constructor จะใช้รับค่า parameter ที่มาจากการสร้าง instance ของ class
    constructor(map) {
        this._map = map
    }

    // method === funtion ที่อยู่ใน object
    printMap() {
        // .map เอาของใน array ทีละชิ้นออกมาแล้วส่งเข้า function ใน parameter ของ map
        // const newMap = this._map.map((row) => {
        //     return row.join('')
        // })
        // console.log(newMap.join('\n'))

        const newMap = []
        this._map.forEach((row) => {
            newMap.push(row.join(''))
        })
        console.log(newMap.join('\n'))
    }
}

const map = [['*', 'o', 'o'], ['░', '░', '^'], ['░', 'o', '░']]

const myGame = new Game(map)

myGame.printMap()
// 123
// 456
// 789