class TodoApp {
    todos = [];
    nextId = 1;
    
    //할일 추가
    addTodo(text) {
        const todo = {
            id: this.nextId++,
            text,               //==text: text (속성명=변수명 이면 속성명 생략가능.)
            completed: false
        }
        this.todos.push(todo);
    };
    
    //할 일 목록 출력
    listTodos() {
        console.log('📌 Todo List');
        this.todos.forEach((todo) => {
            console.log(`[${todo.completed ? '✓': ' '}] (${todo.id}) ${todo.text}`);
        })
    }

    //완료 처리 
    toggleTodo(id) {
        const todo = this.todos.find((t) => t.id === id);
        if (todo) {
            todo.completed = !todo.completed;
        }
    }

    //삭제 처리
    removeTodo(id) {
        this.todos = this.todos.filter((t) => t.id !== id);
    }
}

const app = new TodoApp();
app.addTodo('TypeScript 공부하기');
app.addTodo('JavaScript 공부하기');
app.addTodo('운동하기');
app.listTodos();
app.toggleTodo(1);
app.listTodos();
app.removeTodo(1);
app.listTodos();

