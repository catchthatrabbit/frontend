import { QUERY_KEYS } from "@site/src/constants/queryKeys";
import { STANDARD_REGIONS_API_KEYS } from "@site/src/Api/types";
import {
  fetchPayments,
  fetchPaymentsByWalletAddress,
  fetchPaymentsState,
} from "@site/src/Api/payments/fetchPayments";
import { useQueryConfigured } from "./useQueryConfigured";
import {
  PAYMENTS_BY_WALLET_ADDRESS_RESPONSE,
  PAYMENTS_RESPONSE,
  PAYMENTS_STATE,
} from "../Api/payments/types";
import { useConfigUrlBasedRegion } from "./useConfigUrlBasedRegion";

export const useFetchPaymentByWalletAddress = (
  region: STANDARD_REGIONS_API_KEYS,
  walletAddress: string,
  limit?: number,
  offset?: number,
) => {
  const { url } = useConfigUrlBasedRegion(region);

  return useQueryConfigured<PAYMENTS_BY_WALLET_ADDRESS_RESPONSE>(
    { region, walletAddress, limit, offset, url },
    QUERY_KEYS.PAYMENTS,
    fetchPaymentsByWalletAddress,
  );
};

export const useFetchPayments = (
  region: STANDARD_REGIONS_API_KEYS,
  limit?: number,
  offset?: number,
) => {
  const { url } = useConfigUrlBasedRegion(region);

  return useQueryConfigured<PAYMENTS_RESPONSE>(
    { region, limit, offset, url },
    QUERY_KEYS.PAYMENTS,
    fetchPayments,
  );
};

export const useFetchPaymentsState = (region: STANDARD_REGIONS_API_KEYS) => {
  const { url } = useConfigUrlBasedRegion(region);

  return useQueryConfigured<PAYMENTS_STATE>(
    { region, url },
    QUERY_KEYS.PAYMENTS,
    fetchPaymentsState,
  );
};
