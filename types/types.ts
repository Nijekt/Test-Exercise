export type AccountType = {
  account_name_type: {
    name: string;
    type: string;
  };
  line: string;
  broker: string;
  renewal_date: string;
  premium: string;
  rated_premium: string;
  loss_ratio: string;
  appetite: string;
  status: string;
  triage: number;
  winnability: string;
};

export type PolicyType = {
  line: {
    name: string;
    policy_number: string;
    icon: string;
  };
  eff_date: string;
  exp_date: string;
  status: string;
  expiring_tech: string;
  expiring_premium: string;
  renewal_to_tech: string;
  renewal_tech: string;
  renewal_premium: string;
  rate_change: string;
  loss_ratio: string;
};
