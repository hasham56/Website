import React, {FC, useMemo} from 'react';
import {Redirect, useParams} from 'react-router-dom';

import {DashboardLayout} from 'components';
import ApiMenuItems from 'components/ApiMenuItems';
import NodeApiConnectionRequests from 'containers/NodeApi/NodeApiConnectionRequests';
import {PageData, PageDataObject} from 'types/page-data';

import PrimaryValidatorApiAccounts from './PrimaryValidatorApiAccounts';
import PrimaryValidatorApiBankBlocks from './PrimaryValidatorApiBankBlocks';
import PrimaryValidatorApiBanks from './PrimaryValidatorApiBanks';
import PrimaryValidatorApiConfig from './PrimaryValidatorApiConfig';
import PrimaryValidatorApiConfirmationBlocks from './PrimaryValidatorApiConfirmationBlocks';
import PrimaryValidatorApiValidators from './PrimaryValidatorApiValidators';

const defaultPageData: PageData = {
  content: <Redirect to="primary-validator-api/accounts" />,
  name: '',
};

const pageData: PageDataObject = {
  accounts: {
    content: <PrimaryValidatorApiAccounts />,
    name: 'Accounts',
  },
  'bank-blocks': {
    content: <PrimaryValidatorApiBankBlocks />,
    name: 'Bank Blocks',
  },
  banks: {
    content: <PrimaryValidatorApiBanks />,
    name: 'Banks',
  },
  config: {
    content: <PrimaryValidatorApiConfig />,
    name: 'Config',
  },
  'confirmation-blocks': {
    content: <PrimaryValidatorApiConfirmationBlocks />,
    name: 'Confirmation Blocks',
  },
  'connection-requests': {
    content: <NodeApiConnectionRequests />,
    name: 'Connection Requests',
  },
  validators: {
    content: <PrimaryValidatorApiValidators />,
    name: 'Validators',
  },
};

const getPageData = (chapter: string): PageData => {
  return pageData[chapter] || defaultPageData;
};

const PrimaryValidatorApi: FC = () => {
  const {chapter} = useParams();
  const {content, name} = useMemo(() => getPageData(chapter), [chapter]);

  return (
    <DashboardLayout menuItems={<ApiMenuItems />} pageName={name} sectionName="Primary Validator API">
      {content}
    </DashboardLayout>
  );
};

export default PrimaryValidatorApi;
