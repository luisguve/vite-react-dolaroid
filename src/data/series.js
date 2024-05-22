// Each note has been printed with diffetent series year. This file holds the series
// years that every note was printed with, since 1963.
const series100 = ["2017", "2013", "2009A", "2009", "2006A", "2006", "2003A", "2003", "2001", "1999", "1996", "1993", "1990", "1988", "1985", "1981A", "1981", "1977", "1974", "1969D", "1969C", "1969B", "1969", "1963A"];
const series50 = ["2017", "2013", "2009", "2006", "2004A", "2004", "2001", "1996", "1993", "1990", "1988", "1981A", "1981", "1977", "1974", "1969D", "1969C", "1969B", "1969", "1963A"];
const series20 = ["2017A", "2017", "2013", "2009", "2006", "2004A", "2004", "2001", "1999", "1996", "1995", "1993", "1990", "1988A", "1985", "1981A", "1981", "1977", "1974", "1969D", "1969C", "1969A", "1969", "1963A", "1963"];
const series10 = ["2017", "2013", "2009", "2006", "2004A", "2003", "2001", "1999", "1995", "1993", "1990", "1988A", "1981A", "1981", "1977A", "1977", "1974", "1969D", "1969C", "1969B", "1969", "1963A", "1963"];
const series5 = ["2017", "2013", "2009", "2006", "2003A", "2003", "2001", "1999", "1995", "1993", "1988A", "1988", "1985", "1981A", "1981", "1977A", "1977", "1974", "1969C", "1969B", "1969A", "1969", "1963A", "1963"];
const series2 = ["2017A", "2013", "2009", "2003A", "2003", "1995", "1976"];
const series1 = ["2017", "2013", "2009", "2006", "2003A", "2003", "2001", "1999", "1995", "1993", "1988A", "1988", "1985", "1981A", "1981", "1977A", "1977", "1974", "1969D", "1969C", "1969B", "1969A", "1969", "1963B", "1963A", "1963"];

const denominations = [
	{label: '$100', value: 100, series: series100},
	{label: '$50', value: 50, series: series50},
	{label: '$20', value: 20, series: series20},
	{label: '$10', value: 10, series: series10},
	{label: '$5', value: 5, series: series5},
	{label: '$2', value: 2, series: series2},
	{label: '$1', value: 1, series: series1}
];

export { series100, series50, series20, series10, series5, series2, series1 };

export default denominations;