class Principal {
    principal = null;
    static instance = null;
    _constructor(name) {    // made private so that no one can create object from outside the class
        if (Principal.instance) {
            return Principal.instance;
        }

        this.name = name;
        Principal.instance = this;
    }
    static getPrinciple() {
        if (!Principal.instance) {
            Principal.instance = new Principal();
        }
        return Principal.instance;
    }

    createCurriculam() {

    }
    resticateStudents() {

    }
    suspendStudent(days) {

    }

    notify(message) {

    }
}

module.exports = Principal;