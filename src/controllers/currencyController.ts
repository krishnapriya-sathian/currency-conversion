import { Request, Response } from 'express';
import * as HttpStatus from 'http-status';
import { CurrencyService } from '../services/currencyService';
import { ConversionResult } from '../interfaces/conversion'


/**
* @use Currency Conversion Controller
 * @desc The function used to converting currency in realtime using exchange api
 * @author krishnapriya
 * @return JSON Response
 * @param req {Request}
 * @param res {Response}
 */
export const convertCurrency = async (req: Request, res: Response): Promise<void> => {
    const { from, to, amount } = req.params;
    try {
        const conversionResult: ConversionResult = await CurrencyService.convertCurrency(from, to, parseFloat(amount));
        res.status(HttpStatus.OK).json(conversionResult);
    } catch (error) {
        console.error(error);
        // Handle errors with appropriate HTTP status codes
        if (error instanceof Error) {
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ error: error.message });
        } else {
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ error: 'Internal Server Error' });
        }
    }
};
