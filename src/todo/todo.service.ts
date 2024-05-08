import { Injectable } from '@nestjs/common';
import { PrismaService } from "../prisma.service";
import { CreateTodoDto } from "./dto";

@Injectable()
export class TodoService {
  constructor(private prismaService: PrismaService) {
  }
  async createTodo(data: CreateTodoDto) {
    return this.prismaService.todo.create({data: data});
  }
  async getOneTodo(id: number) {
    return this.prismaService.todo.findUnique({ where: { id: Number(id) } });
  }
  async getAllTodo(){
    return this.prismaService.todo.findMany();
  }
  async updateTodo(
    id: number,
    title: string,
    content: string,
    is_done: boolean,){
    return this.prismaService.todo.update({
      where: { id: Number(id) },
      data: {
        title: title,
        content: content,
        is_done: is_done,
      },
    });
  }
  async deleteTodo(id: number){
    return this.prismaService.todo.delete({ where: { id: Number(id) } });
  }
}
