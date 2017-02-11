<?php 
if( !isset($_GET['from_currency']) || !isset($_GET['to_currency']) || !isset($_GET['amount']) )
{
	echo "ERROR 001 : DATA_INCOMPLETE_ERROR. The required parameters are missing. Please refer documentation for more details.";
}
else
{
		$from = strtoupper($_GET['from_currency']);
		$to = strtoupper($_GET['to_currency']);
		$amount =strtoupper($_GET['amount']);
		$currency_array = array("AED","AFN","ALL","AMD","ANG","AOA","ARS","AUD","AWG","AZN","BAM","BBD","BDT","BGN","BHD","BIF","BMD","BND","BOB","BRL","BSD","BTC","BTN","BWP","BYN","BYR","BZD","CAD","CDF","CHF","CLF","CLP","CNH","CNY","COP","CRC","CUP","CVE","CZK","DEM","DJF","DKK","DOP","DZD","EGP","ERN","ETB","EUR","FIM","FJD","FKP","FRF","GBP","GEL","GHS","GIP","GMD","GNF","GTQ","GYD","HKD","HNL","HRK","HTG","HUF","IDR","IEP","ILS","INR","IQD","IRR","ISK","ITL","JMD","JOD","JPY","KES","KGS","KHR","KMF","KPW","KRW","KWD","KYD","KZT","LAK","LBP","LKR","LRD","LSL","LTL","LVL","LYD","MAD","MDL","MGA","MKD","MMK","MNT","MOP","MRO","MUR","MVR","MWK","MXN","MYR","MZN","NAD","NGN","NIO","NOK","NPR","NZD","OMR","PAB","PEN","PGK","PHP","PKG","PKR","PLN","PYG","QAR","RON","RSD","RUB","RWF","SAR","SBD","SCR","SDG","SEK","SGD","SHP","SKK","SLL","SOS","SRD","STD","SVC","SYP","SZL","THB","TJS","TMT","TND","TOP","TRY","TTD","TWD","TZS","UAH","UGX","USD","UYU","UZS","VEF","VND","VUV","WST","XAF","XCD","XDR","XOF","XPF","YER","ZAR","ZMK","ZMW","ZWL");
		if($from == $to)
		{
			echo "ERROR 002 : INVALID_CONVERSION_ERROR. Please check the conversion types. Conversion types cannot be same.";
		}
		else if( !in_array($from,$currency_array) )
		{
			echo "ERROR 003 : INVALID_FROM_VALUE_ERROR. Please check the from value.Please refer documentation and currency codes for more details.";
		}
		else if( !in_array($to,$currency_array) )
		{
			echo "ERROR 004 : INVALID_TO_VALUE_ERROR. Please check the to value. Please refer  documentation and currency codes for more details.";
		}
		else
		{
			header('Content-type: text/plain');
			$resp = file_get_contents('https://www.google.com/finance/converter?a='.$amount.'&from='.$from.'&to='.$to.'');
			strripos($resp,'bld');
			$start_at = strripos($resp,'bld')+4;
			$till = (strripos($resp,'submit')-24)-$start_at;
			$value = substr($resp,$start_at,$till);
			$json =  '{"data":[{"from":"'.$from.'","to":"'.$to.'","amount":"'.$amount.'","response":"'.$value.'"}]}';
			echo $json;
		}
}
?>