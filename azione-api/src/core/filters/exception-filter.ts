import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from "@nestjs/common";
import { Response, Request } from 'express';

@Catch()
export class AllExceptionFilter implements ExceptionFilter {
    
    catch(exception: HttpException, host: ArgumentsHost) {
        
        const context = host.switchToHttp();
        const req = context.getRequest<Request>();
        const res = context.getResponse<Response>();
        
        const {status} = exception instanceof HttpException ?
        {
            status: exception.getStatus()
        }
        :
        {
            status: HttpStatus.INTERNAL_SERVER_ERROR
        }

        res.status(status).json({
            statusCode: status,
            timestamp: new Date().toISOString(),
            path: req.url,
            message: exception.message
        });
    }
}