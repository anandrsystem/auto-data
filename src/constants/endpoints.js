//model-selector panel
export const listMarketingVehicles = "http://compare.nissanusa.com/nissan_compare/vehicles/listMarketingVehicles.ajax?languageCode=EN&divCode=NI&countryCode=US";

//trim competitor section
export const listCompetitor = acode => `http://compare.nissanusa.com/nissan_compare/vehicles/listCompetitor.ajax?languageCode=EN&divCode=NI&acode=${acode}&firstColor=Silver&type=trim`;
export const listCommonCompetitors = acode => `http://compare.nissanusa.com/nissan_compare/vehicles/listCommonCompetitors.ajax?languageCode=EN&divCode=NI&acode=${acode}&firstColor=Silver`;
export const getCompareData = acodes => `http://compare.nissanusa.com/nissan_compare/vocab/getCompareData.ajax?languageCode=EN&divCode=NI&acodes=${acodes}&ace=false`
