// Implementación del patrón Observer: un Subject mantiene una lista de funciones "observadoras"
// y les avisa (notify) cada vez que pasa algo, sin necesitar saber quiénes son.
class Subject {
    constructor() {
        this.observers = [];
    }

    // Agrega un observer a la lista.
    subscribe(observer) {
        this.observers.push(observer);
    }

    // Saca de la lista al observer indicado (filter descarta ese y deja el resto).
    unsubscribe(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    // Ejecuta a todos los observers pasándoles el mismo dato.
    notify(data) {
        this.observers.forEach(observer => observer(data));
    }

    // Getter: permite leer subject.observerCount como si fuera una propiedad, sin paréntesis.
    get observerCount() {
        return this.observers.length;
    }
}

// Ejemplo de uso:

const subject = new Subject();

// Cada observer es simplemente una función que recibe el dato que le manda notify().
const observer1 = data => console.log("Observer 1 recibió:", data);
const observer2 = data => console.log("Observer 2 recibió:", data);
const observer3 = data => console.log("Observer 3 recibió:", data);

subject.subscribe(observer1);
subject.subscribe(observer2);
subject.subscribe(observer3);

console.log("Cantidad de observers:", subject.observerCount);

// Al desuscribir a observer1, la lista interna pierde un elemento.
subject.unsubscribe(observer1);

console.log("Cantidad de observers:", subject.observerCount);