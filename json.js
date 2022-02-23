

// ## JSON을 왜 사용해야할까
// 만약,  객체를 어딘가에 보내거나 출력해야한다면 객체를 문자열로 전환해야한다.
// 이때 전환된 문자열에는 원하는 정보, 프로퍼티가 모두 포함되어야할 것이다. 이럴때 사용하기 위해 존재하는 기능이 JSON객체이다.


// ## JSON.stringify(obj)
// ***object to json***
// object를 json으로 변환해준다.
// 변경된 문자열은 JSON으로 인코딩된, 직렬화처리된, 문자열로 변환된 , 결집된 객체라고 부른다. 객체를 이렇게 문자열로 변환된 후에야 비로소 네트워크를 통해 전송하거나 저장될 수 있다.
// 함수(object에 있는 데이터가아니기때문)나 자바스크립트에만 있는 symbol등은 json으로 변환할 수 없다.
// 중첩 객체도 알아서 문자열로 변환해준다.


// ## JSON.parse(json)
// ***json to object***
// json을 object로 전환할 수 있다.

let user = {
    name: "John Smith",
    age: 35,
  };

let tojson = JSON.stringify(user);

tojson = JSON.parse(tojson);



/*
4. 순환참조가 있으면 원하는 대로 변환이 불가능하다. ([참조](https://ko.javascript.info/json))
    replacer를 사용하여 순환참조 프로퍼티를 제외하고 전환해야한다. 
    replacer로 원하는 프로퍼티를 선택할때, 프로퍼티안에 중첩객체가 있다면 중첩 프로퍼티의 key값도 replacer에 선언해야 제대로 전환된다.
*/
let room={
    number:24
}
let meetup = {
    title: "Conference",
    occupiedBy: [{name: "John"}, {name: "Alice"}],
    place: room
  };
  
// 순환 참조
room.occupiedBy = meetup;
meetup.self = meetup;

// 순환참조를 배제하는 로직
let temp3= JSON.stringify(meetup, function replacer(key, value) {
        console.log(`key ${key} : value ${value}`);

        return (key!=""&&value==meetup) ? undefined : value;
      });

//   let temp1 = JSON.stringify(meetup , ["title", "occupiedBy","name","place","number"])
//   console.log(temp1)

// console.log(meetup.place)

// let temp3= JSON.stringify(meetup, function replacer(key, value) {
//     // alert(`${key}: ${value}`);
//     return (key == 'occupiedBy') ? undefined : value;
//   });
// let temp4 = JSON.parse(temp3);
//   console.log(temp4.place.number)

console.log(temp3)