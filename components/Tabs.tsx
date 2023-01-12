import { Fragment } from 'react'
import { Tab } from '@headlessui/react'

import { classNames } from "../libs/helpers";
import Table from './Table';
import Profile from './profile';

export default function Tabs() {
  return (
    <Tab.Group>
      <Tab.List className="space-x-4 mb-2">
        <Tab as={Fragment}>
          {({ selected }) => (
            <button
                className={classNames(
                  selected
                    ? 'border-black text-black'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                  'w-fit py-1 px-1 text-center border-b-2 font-medium text-lg'
                )}

            >
              Transactions
            </button>
          )}
        </Tab>
        <Tab as={Fragment}>
          {({ selected }) => (
            <button
                className={classNames(
                  selected
                    ? 'border-b-black text-black'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                  'w-fit py-1 px-1 text-center border-b-2 font-medium text-lg'
                )}

            >
              Profile Information
            </button>
          )}
        </Tab>
        <Tab as={Fragment}>
          {({ selected }) => (
            <button
                className={classNames(
                  selected
                    ? 'border-b-black text-black'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                  'w-fit py-1 px-1 text-center border-b-2 font-medium text-lg'
                )}

            >
              Input/Services Order
            </button>
          )}
        </Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>
          <Table title="Transactions"/>
        </Tab.Panel>
        <Tab.Panel>
          <Profile />
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  )
}