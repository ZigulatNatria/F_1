import React, {useState} from "react";
import Weather from './Weather'

function List() {
    const [value, setValue] = useState('perm');

	function handleChange(event) {
		setValue(event.target.value);
	}
	return <div>
		<select value={value} onChange={handleChange}>
			<option>Пермь</option>
			<option>Киров</option>
			<option>Москва</option>
			<option>Санкт-Петербург</option>
		</select>
		<Weather {...{value}}/>

	</div>;
}

//function List(){
//    const [gorod, setGorod] = useState('')
//    const addGorod = (e) => {
//    e.preventDefault()
//    console.log(gorod)
//    }
//
//    return(
//            <div>
//            <form>
//            <MyInput
//            value={gorod}
//            onChange={e => setGorod(e.target.value)}
//            type='text'
//            />
//            <MyButton onClick={addGorod}>выбрать</MyButton>
//            </form>
//            </div>
//    )
//}

export default List;