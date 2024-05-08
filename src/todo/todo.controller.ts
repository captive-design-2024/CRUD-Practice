import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { TodoService } from "./todo.service";
import { CreateTodoDto } from "./dto";

@Controller('api/v1/todo')
export class TodoController {
  constructor(private todoService: TodoService) {
  }

  @Post()
  async createTodo(@Body() dto: CreateTodoDto){
    return this.todoService.createTodo(dto);
  }

  @Get(':id')
  async getOne(@Param('id') id: number){
    return this.todoService.getOneTodo(id);
  }
  @Get()
  async getAll(){
    return this.todoService.getAllTodo();
  }
  @Delete(':id')
  async deleteTodo(@Param('id') id: number){
    return this.todoService.deleteTodo(id);
  }

  @Put(':id')
  async updateTodo(@Param('id') id: number, @Body() dto: CreateTodoDto){
    return this.todoService.updateTodo(
      id,
      dto.title,
      dto.content,
      dto.is_done,
    );
  }
}
