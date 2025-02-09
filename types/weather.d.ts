export interface WeatherData {
  statusCode?: number;
  error?: {
    code: number;
    message: string;
  };
  location: {
    name: string;
    region: string;
    country: string;
    lat: number;
    lon: number;
    tz_id: string;
    localtime_epoch: number;
    localtime: string;
  };
  current: {
    last_updated_epoch: number;
    temp_c: number;
    is_day: number;
    condition: {
      text: string;
      icon: string;
    };
  };
}
