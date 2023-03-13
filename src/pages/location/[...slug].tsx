import { Back } from "@/components/back";
import { DailyWeather } from "@/components/daily-weather";
import { DetailsWeather } from "@/components/details-weather";
import { Place } from "@/components/place";
import { Temperature } from "@/components/temperature/temperature";
import { WeatherIcon } from "@/components/weather-icon";
import { getOpenWeather } from "@/services/getOpenWeather";
import { WeatherDailyData } from "@/types/weather";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const data = await getOpenWeather(query.lat as string, query.long as string);

  if (data?.cod == 400) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data: data.daily,
      city: query.slug?.[0],
    },
  };
};

interface PlacePageProps {
  city: string;
  data: WeatherDailyData[];
}

const PlacePage = ({ data, city }: PlacePageProps) => {
  const dataHumidity = data.map((hum) => hum.humidity);
  const mayorHumidity = dataHumidity.sort((a, b) => b - a);
  const moreHumidity = data.findIndex(
    (hum) => hum.humidity === mayorHumidity[0]
  );

  return (
    <div>
      <Back />
      <Place city_name={city} />
      <WeatherIcon
        icon={data[0].weather[0].icon}
        description={data[0].weather[0].description}
        size="xl"
      />
      <Temperature tMax={data[0].temp.max} tMin={data[0].temp.min} />
      <DetailsWeather
        humidity={data[0].humidity}
        wind_gust={data[0].wind_gust}
        pressure={data[0].pressure}
        uvi={data[0].uvi}
      />
      <DailyWeather hourly={data} moreHumidity={moreHumidity} />
    </div>
  );
};

export default PlacePage;
