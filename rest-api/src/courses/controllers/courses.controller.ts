import { Controller, Get } from '@nestjs/common';
import { Course } from '../../../../shared/course';
import { CoursesRepository } from '../repositories/courses.repository';

@Controller()
export class CoursesController {
  //
  constructor(private readonly coursesDb: CoursesRepository) {}
  //
  @Get('/api/courses')
  async findAllCourses(): Promise<Course[]> {
    //
    try {
      return await this.coursesDb.findAll();
    } catch (error) {
      throw error;
    }
  }
}
