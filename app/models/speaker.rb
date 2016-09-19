class Speaker < User

  alias_attribute :link, :url

  has_many :events, through: :talks
  has_many :talks, inverse_of: :speaker

  default_scope -> { where('talks_count > 0') }

end
