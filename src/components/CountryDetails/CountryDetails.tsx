import React from 'react';
import { useParams } from 'react-router-dom';
import { Query } from '../../relay';
import { graphql } from 'babel-plugin-relay/macro';
import { Card, CardMedia, Typography } from '@material-ui/core';
import { Row } from '../../ui-library/layout';
import { useIntl } from 'react-intl';
import { messages } from './messages';

export type _id = number;

const query = graphql`
  query CountryDetailsQuery($alpha2Code: String) {
    Country(alpha2Code: $alpha2Code) {
      ...CountryPreviewCard_data
      flag {
        svgFile
      }
      name
      officialLanguages {
        name
      }
      currencies {
        name
      }
      callingCodes {
        name
      }
      area
      capital
      alternativeSpellings {
        name
      }
      nativeName
      subregion {
        name
        region {
          name
        }
      }
    }
  }
`;

export const CountryDetails: React.FC = () => {
  const params: any = useParams();
  const { formatMessage } = useIntl();
  return (
    <Query query={query} variables={{ alpha2Code: params.id }}>
      {(data: any) => {
        if (!data) {
          return null;
        }
        const country = data?.data?.Country?.[0] || {};
        return (
          <Card>
            <CardMedia component="img" width="100%" height={400} image={country.flag?.svgFile} />
            <Row style={{ display: 'flex', justifyContent: 'center' }}>
              <Typography variant="h6" style={{ textAlign: 'center' }}>
                {country.name}
                {formatMessage(messages.location)}{' '}
                {`${country?.subregion?.region?.name}, ${country?.subregion?.name} `}
                {formatMessage(messages.language)}
                {country.officialLanguages?.map((language: any) => ` ${language.name}`)}
                {formatMessage(messages.callingCode)}{' '}
                {country.callingCodes?.map((callingCode: any) => callingCode.name)}
                {formatMessage(messages.currency)}{' '}
                {country.currencies?.map((currency: any) => currency.name)}
              </Typography>
            </Row>
          </Card>
        );
      }}
    </Query>
  );
};
