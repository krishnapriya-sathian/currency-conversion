import { Request, Response } from 'express';
import { CurrencyService, ConversionResult } from '../services/currencyService';

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
        res.json(conversionResult);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
