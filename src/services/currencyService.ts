import axios from 'axios';
import * as dotenv from 'dotenv';
import { ConversionResult } from '../interfaces/conversion'
dotenv.config();

const API_KEY = process.env.API_KEY || '';
const API_BASE_URL = process.env.API_BASE_URL || '';


export class CurrencyService {
    public static async convertCurrency(from: string, to: string, amount: number): Promise<ConversionResult> {
        try {
            const exchangeRateUrl = `${API_BASE_URL}${API_KEY}/pair/${from}/${to}/${amount}`;
            //GET request to the API using axios
            const response = await axios.get(exchangeRateUrl);
            if (response.data.result === 'error') {
                throw new Error(response.data['error-type'] || 'Error converting currency');
            }
            // Extract the converted amount from the API response
            const convertedAmount = response.data.conversion_result;
            // Return a ConversionResult object
            return {
                from,
                to,
                amount,
                convertedAmount,
            };
        } catch (error) {
            console.error(error);
            throw new Error('Error converting currency');
        }
    }
}
