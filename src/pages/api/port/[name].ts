import { PortsResponse } from '@/services';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<PortsResponse>
) {
  const { name } = req.query;
  console.log({ name });
  res.status(200).json(
    {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Bancroft",
            "locode": "CABCT",
            "countryCode": "CA",
            "country": "Canada",
            "subdivision": "ON",
            "type": "port",
            "isSeca": true,
            "size": "tiny"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              -77.85702,
              45.05752
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Banatica",
            "locode": "PTBAN",
            "countryCode": "PT",
            "country": "Portugal",
            "subdivision": "15",
            "type": "port",
            "isSeca": false,
            "size": "tiny"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              -9.2,
              38.666666667
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Banana",
            "locode": "CNBNW",
            "countryCode": "CN",
            "country": "China",
            "type": "port",
            "isSeca": false,
            "size": "tiny"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              12.401459217,
              -6.008958101
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Banana",
            "locode": "CDBNW",
            "countryCode": "CD",
            "country": "Congo, The Democratic Republic of the",
            "type": "port",
            "isSeca": false,
            "size": "tiny"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              12.398675,
              -5.9993015
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Bandanaira",
            "locode": "IDNDA",
            "countryCode": "ID",
            "country": "Indonesia",
            "subdivision": "MA",
            "type": "port",
            "isSeca": false,
            "size": "tiny"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              129.8969,
              -4.5248535
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Banbury",
            "locode": "GBBAB",
            "countryCode": "GB",
            "country": "United Kingdom",
            "subdivision": "OXF",
            "type": "port",
            "isSeca": true,
            "size": "tiny"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              -1.3333333,
              52.05
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Banawan/Dadiangas",
            "locode": "PHBNW",
            "countryCode": "PH",
            "country": "Philippines",
            "type": "port",
            "isSeca": false,
            "size": "tiny"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              121.97,
              10.6
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Neum",
            "locode": "BANEM",
            "countryCode": "BA",
            "country": "Bosnia and Herzegovina",
            "type": "port",
            "isSeca": false,
            "size": "tiny"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              17.616666667,
              42.916666667
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Ban Kantang",
            "locode": "THBNK",
            "countryCode": "TH",
            "country": "Thailand",
            "type": "port",
            "isSeca": false,
            "size": "tiny"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              99.52764,
              7.42471
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Ban Pong",
            "locode": "THBPG",
            "countryCode": "TH",
            "country": "Thailand",
            "type": "port",
            "isSeca": false,
            "size": "tiny"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              99.866666667,
              13.8
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Bandar Mashur",
            "locode": "IRBMR",
            "countryCode": "IR",
            "country": "Iran, Islamic Republic of",
            "subdivision": "10",
            "type": "port",
            "isSeca": false,
            "size": "tiny"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              49.183333333,
              30.55
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Banda Aceh",
            "locode": "IDBTJ",
            "countryCode": "ID",
            "country": "Indonesia",
            "type": "port",
            "isSeca": false,
            "size": "tiny"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              95.296017194,
              5.567380295
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Bandar Shahid Rajaee",
            "locode": "IRBSR",
            "countryCode": "IR",
            "country": "Iran, Islamic Republic of",
            "type": "port",
            "isSeca": false,
            "size": "tiny"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              56.2033333,
              27.1319444
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Ban Talat Takua Pa",
            "locode": "THBTP",
            "countryCode": "TH",
            "country": "Thailand",
            "subdivision": "82",
            "type": "port",
            "isSeca": false,
            "size": "tiny"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              98.366666667,
              8.833333333
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Ban Prakop Customs House",
            "locode": "THBPK",
            "countryCode": "TH",
            "country": "Thailand",
            "subdivision": "90",
            "type": "port",
            "isSeca": false,
            "size": "tiny"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              100.716666667,
              6.466666667
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Ban Map Ta Phut",
            "locode": "THMTP",
            "countryCode": "TH",
            "country": "Thailand",
            "subdivision": "31",
            "type": "port",
            "isSeca": false,
            "size": "tiny"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              101.15,
              12.716666667
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Shahid Rajaee Pt/Bandar Abbas",
            "locode": "IRSRP",
            "countryCode": "IR",
            "country": "Iran, Islamic Republic of",
            "subdivision": "23",
            "type": "port",
            "isSeca": false,
            "size": "tiny"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              56.07532,
              27.10832
            ]
          }
        }
      ],
      "properties": null
    }
  );
}
