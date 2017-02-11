/**
* @Author: Vivek Wisdom <vivek>
* @Date:   2017-02-11T23:48:01+05:30
* @Email:  vivek@wivivekwisdom.com
* @Last modified by:   vivek
* @Last modified time: 2017-02-11T23:48:01+05:30
*/
var PersonIs = (function () {
    function PersonIs(val) {
        this.name = "Hello, ";
        this.name = name + val;
    }
    PersonIs.prototype.printPerson = function () {
        console.log(name);
        console.log('Hello');
        console.log('Hello');
        console.log('Hello');
        console.log('Hello');
    };
    return PersonIs;
}());
var vivek = new PersonIs(vivek);
vivek.printPerson();
