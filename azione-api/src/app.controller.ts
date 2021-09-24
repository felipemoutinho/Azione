import { Controller,UseGuards,Post,Request, Get } from '@nestjs/common';
import { AuthService } from './modules/auth/auth.service';
import { LocalAuthGuard } from './core/guards/local-auth.guard';

@Controller()
export class AppController {
  constructor(private authService: AuthService) {

  }
  
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req){
    console.log(req.user);
    return this.authService.login(req.user);
  }

}
