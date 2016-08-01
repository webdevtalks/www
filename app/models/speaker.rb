class Speaker < User

  default_scope -> { joins(:talks).having('count(*) > 0').group(:id) }

end
